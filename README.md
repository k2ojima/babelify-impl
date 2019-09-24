# babelify-impl
This is a frontend environment which uses babelify and Sass.

Available even if you have recursive folder structure.

## Requirements
- bash or zsh
- Node.js

## Functions
- compiles sass and javascript
- adds vendor prefix to css using Autoprefixer
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
# NPM settings
# if compress: production, if dont compress: development
NODE_ENV=production

# the directory in which sass is
STYLE_PATH=resources/sass/

# the directory in which javascript is
JS_PATH=resources/js/

# the directory in which the file compressed
STYLE_DIST_PATH=public/css/
JS_DIST_PATH=public/js/
```

---

Executing below, watch and compile sass and js.

```bash
$ npx babelify-impl watch
```

You can compile only sass/javascript to make faster.

```bash
$ npx babelify-impl watch sass

$ npx babelify-impl watch js
```

You can also build once.

```bash
$ npx babelify-impl build
```