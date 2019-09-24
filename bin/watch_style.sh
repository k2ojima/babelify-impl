#!/bin/bash
echo 'watching sass...'
[[ $NODE_ENV -eq production ]] && output_style='compressed' || output_style='expanded'

node-sass -r -w $STYLE_PATH\
        --output-style $output_style\
        --indent-type tab\
        -o $STYLE_DIST_PATH\
        --include-path $STYLE_PATH\
        --omit-source-map &&\
    postcss $STYLE_DIST_PATH**/* \
        -u autoprefixer -r
