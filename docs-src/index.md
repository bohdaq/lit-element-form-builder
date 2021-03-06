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

`<form-builder>` can be configured with JSON. You can subscribe to 'form-builder-updated' event to get updates.

```html
<form-builder id="builder"></form-builder>
<script>
  document.querySelector('#builder').controlList = [{ control: 'textbox' }];
  document.querySelector('#builder').addEventListener('form-builder-updated', (event) => {
    console.log('form-builder-updated ', event.detail);
  });
</script>
```

  </div>
  <div>

<form-builder id="builder"></form-builder>
<script>
  document.querySelector('#builder').controlList = [{ control: 'textbox' }];
  document.querySelector('#builder').addEventListener('form-builder-updated', (event) => {
    console.log('form-builder-updated ', event.detail);
  });
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
  <form-builder></form-builder>
`, document.body);
```

  </div>
  <div>

<form-builder></form-builder>

  </div>
</section>
