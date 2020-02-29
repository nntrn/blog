---
title: 'Responsive Battery API'
description: 'For chrome and android devices: track device battery life using Battery Status API [deprecated]'
categories: ['Web API']
tags: ['navigator', 'battery api', 'getBattery', 'animation']
codepen: true
codepen-slug: 'oNXWWJq'
---

This pen uses the Battery Status API, which is deprecated, and does not work for Safari and iOS Devices.

```html
<div class="battery">
  <div class="base"></div>
  <div class="before"></div>
  <div class="after"></div>
</div>
```

```css
body {
  font-family: sans-serif;
  background: white;
  color: #d6deeb;
  display: flex;
  height: 100vh;
  align-items: center;
  align-content: center;
}
.battery {
  position: relative;
  margin: 0 auto;
  width: calc(100vw / 6);
  color: rgb(0, 255, 109);
  border: calc(100vw / 120) solid currentColor;
  height: calc(90vw / 12.25);
  border-radius: calc(100vw / 100);
}
.battery:after {
  content: attr(data-battery-life);
  color: currentColor;
  position: absolute;
  bottom: 0;
  z-index: 3;
  margin-bottom: -30px;
  font-size: 12px;
}
.base {
  height: 110%;
  left: -1px;
  top: -1px;
  background: currentColor;
  position: absolute;
  z-index: -1;
  padding: 0.5px 0;
}
.before {
  position: absolute;
  height: 110%;
  left: -1px;
  top: -1px;
  padding: 0.5px 0;
  background: currentColor;
  opacity: 0.46;
  z-index: -3;
  animation-direction: alternate-reverse;
}
.after {
  position: absolute;
  margin-right: calc(100vw / calc(13.5 * -3));
  right: 0;
  top: calc(50vw / 30);
  width: calc(100vw / 90);
  height: calc(100vw / 25);
  background: currentColor;
  border-bottom-right-radius: calc(90vw / 150);
  border-top-right-radius: calc(90vw / 150);
}
.charging {
  animation: full 3500ms linear infinite;
}
.low-battery {
  color: red;
}
@keyframes full {
  0% {
    width: 0%;
  }
  25% {
    width: 25%;
  }
  50% {
    width: 50%;
  }
  75% {
    width: 75%;
  }
  100% {
    width: 105%;
  }
}
```

```js
var $ = element => query => element.querySelector(query) || element
var $battery = $(document.querySelector('.battery'))

function updateBatteryStatus(battery) {
  $battery('.base').style.width = `${Number.parseInt(battery.level * 100)}%`
  $battery().dataset.batteryLife = `${Number.parseInt(battery.level * 100)}%`

  if (battery.level < 0.25) {
    $battery().classList.add('low-battery')
  }
  if (battery.charging) {
    $battery('.before').classList.add('charging')
  } else {
    $battery('.before').classList.remove('charging')
  }
}

navigator.getBattery().then(battery => {
  updateBatteryStatus(battery)

  battery.onlevelchange = function() {
    updateBatteryStatus(battery)
    if (battery.level > 0.2) {
      $battery().classList.remove('low-battery')
    }
  }
  battery.onchargingchange = function() {
    updateBatteryStatus(battery)
  }
})
```
