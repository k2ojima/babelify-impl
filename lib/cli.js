#!/usr/bin/env node

const fs = require('fs'),
    babelifyImpl = require('./babelify');

require('dotenv').config();

const dist = process.env.JS_DIST_PATH;

function showHelp() {
    console.log(`Usage:
    $ babelify-impl <action>

Commands
    build         build es6+
    watch         watch es6+`);
}

if (!fs.existsSync(dist)) fs.mkdir(dist, { recursive: true }, (err) => {});

switch (process.argv.slice(2)[0]) {
    case 'help':
        showHelp();
        break;
    case 'build':
        babelifyImpl.build();
        break;
    case 'watch':
        babelifyImpl.watch();
        break;
    default:
        showHelp();
        break;
}
