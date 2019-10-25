
const pkg = require('../package.json');
const fs = require('fs'),
    recursive = require('recursive-readdir'),
    browserify = require('browserify'),
    path = require('path'),
    babelify = require('babelify'),
    watchVendor = require('watch');

require('dotenv').config();

const dir = process.env.JS_PATH,
    dist = process.env.JS_DIST_PATH;

const root_alias = '~',
    ext = '.js';

const resolved_dir = path.resolve(__dirname, '..', dir),
    resolved_dist = path.resolve(__dirname, '..', dist);

const color_cyan = '\u001b[36m',
    color_reset = '\u001b[0m';


function build() {
    recursive(resolved_dir+path.sep, [(file, stat) => !(stat.isDirectory() || path.extname(file) == ext)],
    (err, files) => {
        if (err) throw err;
        files.forEach((value, i) => {
            var relative_value = value.replace(resolved_dir + path.sep, '');
            browserify({
                entries: value,
                extensions: [ext]
            })
            .on('bundle', function(bundle) {
                let localdir = path.dirname(resolved_dist + path.sep + relative_value);

                if (!fs.existsSync(localdir) && fs.statSync(localdir).isDirectory()) fs.mkdirSync(localdir);
            })
            .transform(babelify.configure({
                presets: [
                    ['@babel/preset-env', {
                        "targets": {
                            "ie": 11,
                            "android": 4,
                            "safari": 9
                        }
                    }],
                    process.env.NODE_ENV === 'production' ? ['minify'] :null
                ],
                plugins: [
                    ["module-resolver", {
                        "root": [resolved_dir + path.sep],
                        "alias": {
                            [root_alias]: resolved_dir
                        }
                    }]
                ],
                comments: false
            }))
            .bundle((err, src) => {
                if (err) throw err;
            })
            .pipe(fs.createWriteStream(resolved_dist + path.sep + relative_value))
            .on('close', () => { console.info(
                [color_cyan, '[', pkg.name, ']', color_reset, ' compiled ', resolved_dist, path.sep , relative_value].join('')
            ); });
        });
    });
}

function watch() {
    watchVendor.watchTree(resolved_dir, (f, curr, prev) => {
        if (typeof f == "object" && prev === null && curr === null) {
            console.info(
                [color_cyan, '[', pkg.name, ']', color_reset, ' watching'].join('')
            );
        } else {
            build();
        }
    });
}

module.exports.build = build;
module.exports.watch = watch;