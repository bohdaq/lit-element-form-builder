---
layout: example.11ty.cjs
title: <form-builder> ⌲ Examples ⌲ Basic
tags: example
name: Basic
description: A basic example
---

<style>
  form-builder {

  }
</style>


<h3>HTML</h3>

```html
<form-builder id="builder"></form-builder>
<script>
  document.querySelector('#builder').controlList = [{ control: 'textbox' }, { control: 'combobox' }, { control: 'document' }];
  document.querySelector('#builder').addEventListener('form-builder-updated', (event) => {
    console.log('form-builder-updated ', event.detail);
  });
</script>
```


<h3>Demo</h3>
<form-builder id="builder">
</form-builder>
<script>
  document.querySelector('#builder').controlList = [{ control: 'textbox' }, { control: 'combobox' }, { control: 'document' }];
  document.querySelector('#builder').addEventListener('form-builder-updated', (event) => {
    console.log('form-builder-updated ', event.detail);
  });
</script>

