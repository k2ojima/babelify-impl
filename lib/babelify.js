
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

const resolved_dir = path.resolve(process.cwd(), dir),
    resolved_dist = path.resolve(process.cwd(), dist);

const color_cyan = '\u001b[36m',
    color_reset = '\u001b[0m';

const babelify_option = {
    presets: [
        ['@babel/preset-env', {
            "targets": {
                "ie": 11,
                "android": 4,
                "safari": 9
            }
        }]
    ],
    env: {
        production: {
            presets: ['minify']
        }
    },
    plugins: [
        ["module-resolver", {
            "root": [resolved_dir + path.sep],
            "alias": {
                [root_alias]: resolved_dir
            }
        }]
    ],
    comments: false
};

/**
 * Make directory which not exists
 * @param {String} file_path
 */
function mkdirIfNotExists(file_path) {
    let relative_value = file_path.replace(resolved_dir + path.sep, '');
    // create the directory as browserify doesn't make it
    let local_dist = path.dirname(resolved_dist + path.sep + relative_value),
        local_dir = path.dirname(resolved_dir + path.sep + relative_value);

    if (!fs.existsSync(local_dist) && fs.statSync(local_dir).isDirectory()) {
        fs.mkdirSync(local_dist, {recursive: true});
    }
}

/**
 * Transform files
 * @param {String} file_path
 */
function doTransform(file_path) {
    let relative_value = file_path.replace(resolved_dir + path.sep, '');
    browserify({
        entries: file_path,
        extensions: [ext]
    })
    .transform(babelify.configure(babelify_option))
    .bundle((err, src) => {
        if (err) throw err;
    })
    .pipe(fs.createWriteStream(resolved_dist + path.sep + relative_value))
    .on('close', () => { console.info(
        [color_cyan, '[', pkg.name, ']', color_reset, ' compiled ', resolved_dist, path.sep , relative_value].join('')
    ); });
}

/**
 * Facade function for transpiling js files
 */
function build() {
    recursive(resolved_dir+path.sep, [(file, stats) => !(stats.isDirectory() || path.extname(file) == ext)]).then(
        (files) => {
            files.forEach((value, index) => {
                mkdirIfNotExists(value);
                doTransform(value);
            });
        },
        (error) => {
            console.error(error);
        }
    );
}

/**
 * Watch changes on js files
 */
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