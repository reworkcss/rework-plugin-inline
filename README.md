rework-plugin-inline
====================

[![Build Status](https://travis-ci.org/reworkcss/rework-plugin-inline.png)](https://travis-ci.org/reworkcss/rework-plugin-inline)

inline() plugin for rework, formerly included in core

### .inline(dir)

  Inline files from `dir` directly to CSS. Replace `inline(path)` to Data URI
  with base64 encoding of file. It is useful for small images and fonts.

  Of course, you can use inline only with node. It is not available
  in the browser with component.

```js
var css = rework(read(css))
  .use(rework.inline('images/', 'fonts/'))
  .toString()
```

```css
.logo {
  background: inline(icons/logo.png);
}
```

yields:

```css
.logo {
  background: url("data:image/png;base64,iVBORw0…");
}
```
