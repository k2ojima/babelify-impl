# babelify-impl
This is an implementation of babelify.
Available even if you have recursive folder structure.

## Requirements
- bash or zsh
- Node.js

## Functions
- minify javascript
- converts ES6+ into ES5 using babelify
- enables to use `require()` or `import()` phrase in javascript using browserify

## How to use
Install this package.

```bash
$ npm i -D babelify-impl
```

---

Add following setting to the `.env`.

### Example of .env
```.env
# babelify-impl settings
# if compress: production, if dont compress: development
NODE_ENV=production

# the directory in which the file exists
JS_PATH=resources/js/

# the directory to which the file compressed
JS_DIST_PATH=public/js/
```

---

### Usage
```
Usage: babelify-impl <action>

Commands
    build         build es6+
    watch         watch es6+
```
