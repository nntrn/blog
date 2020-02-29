---
title: 'Simple Modal'
description: 'A simple popup modal using only CSS and HTML'
categories: ['Component']
tags: ['modal', 'noJS', 'component']
codepen: true
---

Adapted from [Popup/Modal without JS](https://codepen.io/peiche/pen/vhqym)

```html
<a class="button" href="#popup2">Click Me Too</a>
<div id="popup2" class="overlay light">
  <a class="cancel" href="#"></a>
  <div class="popup">
    <h2>What the what?</h2>
    <a class="close" href="#">&times;</a>
    <div class="content">
      <p>Click outside the popup to close.</p>
    </div>
  </div>
</div>
```

```css
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 200ms;
  visibility: hidden;
  opacity: 0;
  height: 100vh;
}
.overlay.light {
  background: rgba(255, 255, 255, 0.65);
}
.overlay .cancel {
  position: absolute;
  width: 100%;
  height: 100vh;
  cursor: default;
}
.overlay:target {
  visibility: visible;
  opacity: 1;
}
.popup {
  margin: 75px auto;
  padding: 20px;
  background: var(--color-background);
  border: 1px solid var(--color-primary);
  width: 300px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
  position: relative;
}
.light .popup {
  border-color: rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
}
.popup h2 {
  margin-top: 0;
  color: var(--color-text-default);
  font-weight: 600;
}
.popup .close {
  border: 0;
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  right: 0.25rem;
  opacity: 1;
  transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: var(--color-primary);
  opacity: 0.6;
}
.popup .close:hover {
  opacity: 1;
}
.popup .content {
  max-height: 400px;
  overflow: auto;
}
.button {
  border-bottom: 0;
}
```
