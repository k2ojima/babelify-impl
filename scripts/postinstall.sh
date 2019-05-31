#!/bin/bash
test -f .env || cp .env.sample .env
cp src/.modules/parallelshell/index.js node_modules/parallelshell/index.js