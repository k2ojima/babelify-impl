#!/usr/bin/env node

const path = require('path');
const { spawn } = require('child_process');

const cli = spawn('bash', [path.resolve(__dirname, './cli.sh')].concat(process.argv.slice(2)));

cli.stdout.on('data', (data) => { console.log(data.toString()); });
cli.stderr.on('data', (data) => { console.log(data.toString()); });