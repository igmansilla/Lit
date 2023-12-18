---
layout: page.11ty.cjs
title: <lit-select> ⌲ Home
---

# &lt;lit-select>

`<lit-select>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<lit-select>` is just an HTML element. You can it anywhere you can use HTML!

```html
<lit-select></lit-select>
```

  </div>
  <div>

<lit-select></lit-select>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<lit-select>` can be configured with attributed in plain HTML.

```html
<lit-select name="HTML"></lit-select>
```

  </div>
  <div>

<lit-select name="HTML"></lit-select>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<lit-select>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;lit-select&gt;</h2>
    <lit-select .name=${name}></lit-select>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;lit-select&gt;</h2>
<lit-select name="lit-html"></lit-select>

  </div>
</section>
