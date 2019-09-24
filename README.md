# babelify-impl
This is a frontend environment which uses babelify and Sass.

## Requirements
- Node.js

## Functions
- Compresses css and javascript
- adds vendor prefix to css using Autoprefixer
- converts ES6+ into ES5
- enables to use `require()` or `import()` phrase in javascript

## How to use
Install the `node_modules`.

```bash
$ npm install
```

---

Create `.env`.
Add following setting if `.env` already exists.

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

Execute the below when compiling.

```bash
$ npm run watch
```

You can compile only sass/javascript to make faster.

```bash
$ npm run watch:sass

$ npm run watch:js
```

You can also build once.

```bash
$ npm run build
```
