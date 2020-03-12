const _routes = [
  {
    url: '/posts/CSS-HSL-color-theme',
    title: 'CSS HSL Color Theme',
    description: 'calculating colors using HSL',
    content: '',
    tags: [ 'color', 'css' ]
  },
  {
    url: '/posts/battery-api',
    title: 'Responsive Battery API',
    description:
      'For chrome and android devices: track device battery life using Battery Status API [deprecated]',
    content:
      'This pen uses the Battery Status API, which is deprecated, and does not work for Safari and iOS Devices. ',
    tags: [ 'javascript', 'animation' ]
  },
  {
    url: '/posts/computedStyleMap',
    title: 'computedStyleMap',
    description:
      'Access all the CSS properties and values — including custom properties — that are impacting an element',
    content: '',
    tags: ['css']
  },
  {
    url: '/posts/event-delegation-menu',
    title: 'Event Delegation Menu',
    description:
      'Event delegation handler reads the attribute and executes method on call',
    content:
      ' > Note that `this.onClick` is bound to this in `(*)`. That’s important, because otherwise this inside it would reference the DOM element (elem), not the Menu object, and this[action] would not be what we need.',
    tags: ['events']
  },
  {
    url: '/posts/exportPathMap',
    title: 'exportPathMap',
    description: 'A simple popup modal using only CSS and HTML',
    content:
      "This feature is exclusive of `next export`. Please refer to [Static HTML export](https://nextjs.org/docs/advanced-features/static-html-export) if you want to learn more about it. Let's start with an example, to create a custom `exportPathMap` for an app with the following pages: - `pages/index.js` - `pages/about.js` - `pages/post.js` Open `next.config.js` and add the following `exportPathMap` config: ",
    tags: [ 'nextjs', 'next', 'react' ]
  },
  {
    url: '/posts/iframe-blob',
    title: 'iframe blob',
    description: 'Blob as HTML for iFrame',
    content: '',
    tags: ['iframe']
  },
  {
    url: '/posts/mouse-canvas',
    title: 'Mouse Canvas',
    description: 'Cursor like canvas tracking mouse position',
    content: '',
    tags: [ 'canvas', 'game', 'events' ]
  },
  {
    url: '/posts/semi-circle-donut-chart',
    title: 'Semi Circle Donut Chart',
    description:
      'Semi circle donut chart in pure css3 (adapted from Vineeth.TR (@vineethtr) on Codepen)',
    content: '',
    tags: ['chart']
  },
  {
    url: '/posts/simple-modal',
    title: 'Simple Modal',
    description: 'A simple popup modal using only CSS and HTML using `:target`',
    content:
      'Adapted from @peiche\'s [codepen](https://codepen.io/peiche/pen/vhqym) > A popup window/modal window experiment based on the `:target` pseudoclass. > * The first popup stays open until you click the "X" to close.  > * The second will close when you click anywhere outside the popup.  ',
    tags: ['component']
  }
];
