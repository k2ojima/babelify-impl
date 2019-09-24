#!/bin/bash

envfile="./.env"

if [[ ! -e $envfile ]]; then
    echo "Error: .env file doesn't exist."
    exit
fi

showhelp() {
    echo "
Usage:
    $ babelify-impl <action> <param>

Commands
    build         build sass and es6+
    watch         watch sass and es6+
    build sass    build sass
    build js      build es6+
    watch sass    watch and compile sass
    watch js      watch and transpile es6+
"
    exit
}

build-sass() {
    npx env-cmd -f $envfile bash ./bin/build_style.sh
}

build-js() {
    npx env-cmd -f $envfile node ./src/bundle.js
}

watch-sass() {
    npx env-cmd -f $envfile bash ./bin/watch_style.sh
}

watch-js() {
    npx env-cmd -f $envfile bash ./bin/watch_js.sh
}

if [[ $1 == 'help' ]] || [[ -z $1 ]]; then
    showhelp
fi

if [[ $1 == 'build' ]] && [[ $2 == 'sass' ]]; then
    build-sass
elif [[ $1 == 'build' ]] && [[ $2 == 'js' ]]; then
    build-js
elif [[ $* == 'build' ]]; then
    build-sass && build-js
elif [[ $1 == 'watch' ]] && [[ $2 == 'sass' ]]; then
    watch-sass
elif [[ $1 == 'watch' ]] && [[ $2 == 'js' ]]; then
    watch-js
elif [[ $* == 'watch' ]]; then
    npx env-cmd -f $envfile bash ./bin/watch.sh
else
    echo "Error: Invalid command."
    showhelp
fi