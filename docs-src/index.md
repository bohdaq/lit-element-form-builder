---
layout: page.11ty.cjs
title: <form-builder> ⌲ Home
---

# &lt;form-builder>

`<form-builder>` is a Drag'n'Drop builder written using LitElement

## As easy as HTML

<section class="columns">
  <div>

`<form-builder>` is just an HTML element. You can use it anywhere you can use HTML!

```html
<form-builder></form-builder>
```

  </div>
  <div>

<form-builder></form-builder>

  </div>
</section>

## Configure

<section class="columns">
  <div>

`<form-builder>` can be configured with JSON.

```html
<form-builder id="builder"></form-builder>
document.querySelector('#builder').controlList = [{ control: 'textbox' }];
```

  </div>
  <div>

<form-builder id="builder"></form-builder>
<script>
  document.querySelector('#builder').controlList = [{ control: 'textbox' }];
</script>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<form-builder>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name="lit-html";

render(html`
  <h2>This is a &lt;form-builder&gt;</h2>
  <form-builder></form-builder>
`, document.body);
```

  </div>
  <div>

<form-builder></form-builder>

  </div>
</section>
