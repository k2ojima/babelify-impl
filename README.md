# browserify-es6-sass-env
Sass, JSのコンパイル環境です。

## 必要モジュール
- Node.js

## 利用可能な機能
- CSS, JSの圧縮
- CSSのベンダープレフィックスをコンパイル時に自動付与
- JSのトランスパイル（ES6をES5へ変換してコンパイル）
- `import()`文によるモジュール分割を利用可能

## 使い方
node_modulesをインストールします。

```bash
$ npm install
```

---

`.env`を設定します

.envがすでにある場合は、追記してください。

### .env の設定例
```.env
# NPM settings
# 圧縮する場合：production, しない場合：development
NODE_ENV=production

# Sassファイルのディレクトリ
STYLE_PATH=resources/sass/

# JSファイルのディレクトリ
JS_PATH=resources/js/

# 圧縮後ファイルのディレクトリ
STYLE_DIST_PATH=public/css/
JS_DIST_PATH=public/js/
```

---

コンパイル時、下記を実行してください。変更が自動で監視されます。

```bash
$ npm run watch
```

より動作速度を早くするため、Sassのみ・JSのみの監視も利用してください。

```bash
$ npm run watch:sass

$ npm run watch:js
```

監視ではなく、一度だけコンパイルすることもできます。

```bash
$ npm run build
```
