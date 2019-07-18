# browserify-es6-sass-env
This is the frontend environment for optimizing sass and javascript.
There's no dependencies for Gulp or Webpack.

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

Configure `.env`.
Add settings to the end if `.env` already exists.

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

You can use sass only / javascript only compiling to use faster.

```bash
$ npm run watch:sass

$ npm run watch:js
```

You can also build once.

```bash
$ npm run build
```
