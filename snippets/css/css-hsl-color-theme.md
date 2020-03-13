---
description: calculating colors using HSL
---

# CSS HSL Color Theme

### Sources

* [https://codepen.io/una/pen/VJMBbx](https://codepen.io/una/pen/VJMBbx)
* [https://una.im/css-color-theming/](https://una.im/css-color-theming/)

### References

* [http://tallys.github.io/color-theory/](http://tallys.github.io/color-theory/)
* [https://dev.to/benjaminadk/make-color-math-great-again--45of](https://dev.to/benjaminadk/make-color-math-great-again--45of)
* [https://tsh.io/blog/why-should-you-use-hsl-color-representation-in-css/](https://tsh.io/blog/why-should-you-use-hsl-color-representation-in-css/)

```markup
<h2>
  <input type="color" value="#724AFF" id="base-color-input"/>
  <label>select base color</label>
</h2>
<div class="box-container">
  <div class="box base"><p>base</p></div>
  <div class="box base-light"><p>light<p/></div>
  <div class="box base-dark"><p>dark</p></div>
  <div class="box base-complement"><p>complement</p></div>
  <div class="box base-triad-1"><p>triad 1</p></div>
  <div class="box base-triad-2"><p>triad 2</p></div>
</div>
```

{% tabs %}
{% tab title="Root" %}
```css
:root {
  --h: 253;
  --s: 100%;
  --l: 50%;

  --contrastThreshold: 60%;
  --lightnessTransform: 10;
  --darknessTransform: 20;

  --darker: calc((100 - var(--darknessTransform)) / 100);
  --lighter: calc((100 + var(--lightnessTransform)) / 100);

  --light-l: calc(var(--l) * var(--lighter));
  --dark-l: calc(var(--l) * var(--darker));

  --base: hsl(var(--h), var(--s), var(--l));
  --dark: hsl(var(--h), var(--s), var(--dark-l));
  --light: hsl(var(--h), var(--s), var(--light-l));

  --complement: hsl(calc(var(--h) + 180), var(--s), var(--l));
  --triad-1: hsl(calc(var(--h) + 120), var(--s), var(--l));
  --triad-2: hsl(calc(var(--h) - 120), var(--s), var(--l));
}
.box {
  --color: var(--base);
  --switch: calc((var(--l) - var(--contrastThreshold)) * -100);
  background: var(--color);
  color: hsl(0, 0%, var(--switch));
}
.base {
  --color: var(--base);
}
.base-light {
  --color: var(--light);
  --l: var(--light-l);
}
.base-dark {
  --color: var(--dark);
  --l: var(--dark-l);
}
.base-complement {
  --color: var(--complement);
}
.base-triad-1 {
  --color: var(--triad-1);
}
.base-triad-2 {
  --color: var(--triad-2);
}
::-webkit-color-swatch-wrapper {
  padding: 0;
}
::-webkit-color-swatch {
  border: none;
}
```
{% endtab %}

{% tab title="Global" %}
```css
body {
  font-family: sans-serif;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-family: sans-serif;
  width: 100vw;
  height: 100vh;
  font-size: 15px;
  display: flex;
  align-content: space-around;
}
* {
  box-sizing: border-box;
}
input[type='color'] {
  font-size: 100%;
  line-height: 1.15;
  margin: 1rem auto;
  width: 80%;
  display: flex;
  border: 2px solid black;
}
.color-container {
  border: 1px solid #eee;
}
.box-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}
.box:after {
  content: '';
  height: 15px;
  width: 15px;
  background: var(--base);
  position: absolute;
  right: 1px;
  bottom: 1px;
  z-index: 2;
  border-radius: 100%;
}
.box {
  overflow: hidden;
  height: calc(100vw / 10);
  overflow: hidden;
  width: calc(100vw / 10);
  min-width: 100px;
  min-height: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.25rem;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.15);
}

```
{% endtab %}
{% endtabs %}

```javascript
function setTheme(H, inputType) {
  // Convert hex to RGB first
  let r = 0, g = 0, b = 0
  if (H.length == 4) {
    r = '0x' + H[1] + H[1]
    g = '0x' + H[2] + H[2]
    b = '0x' + H[3] + H[3]
  } else if (H.length == 7) {
    r = '0x' + H[1] + H[2]
    g = '0x' + H[3] + H[4]
    b = '0x' + H[5] + H[6]
  }
  // Then to HSL
  r /= 255
  g /= 255
  b /= 255

  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0, s = 0, l = 0

  if (delta == 0) { h = 0 } 
  else if (cmax == r) { h = ((g - b) / delta) % 6 } 
  else if (cmax == g) { h = (b - r) / delta + 2 } 
  else { h = (r - g) / delta + 4 }

  h = Math.round(h * 60)

  if (h < 0) { h += 360 }

  l = (cmax + cmin) / 2
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
  s = +(s * 100).toFixed(1)
  l = +(l * 100).toFixed(1)

  document.documentElement.style.setProperty('--h', h)
  document.documentElement.style.setProperty('--s', s + '%')
  document.documentElement.style.setProperty('--l', l + '%')
}

document.querySelector('#base-color-input').addEventListener('change', e => {
  setTheme(e.target.value, 'base')
})
```

