import React from 'react'
import PropTypes from 'prop-types'

const EmbedCodepen = props => {
  const { height, target, className, label, ...send } = props
  const iframeId = [ 'Embed', props.title.replace(/\s/g, '-') ].join('-')
  
  const style = {
    container: {
      height: 0,
      transition: 'height 1200ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      border: '0px solid #222',
      background: '#222',
      margin: '1rem 0',
      marginBottom: '2.5rem'
    },
    button: {
      background: '#f1c40f',
      top: 0,
      left: 0,
      fontFamily: 'sans-serif',
      color: '#222',
      border: 0,
      padding: '.25rem'
    }
  }
  const handleButtonClick = ev => {
    ev.target.style.display = 'none'
    ev.target.parentElement.parentElement.style.height = height
    ev.target.parentElement.parentElement.style.borderWidth = '5px'
  }
  return (
    <div id={[ 'Container', iframeId ].join('-')} style={{ ...style.container }}>
      <form
        action="https://codepen.io/pen/define"
        method="POST"
        target={iframeId}
        rel="noopener noreferrer"
      >
        <input type="hidden" name="data" value={JSON.stringify(send)} />
        <button
          type="submit"
          onClick={ev => handleButtonClick(ev)}
          style={{ ...style.button }}
        >
          {label}
        </button>
      </form>
      <iframe
        name={iframeId}
        id={iframeId}
        style={{ width: '100%', height: '100%' }}
      ></iframe>
    </div>
  )
}

EmbedCodepen.defaultProps = {
  title: '',
  description: '',
  tags: [],
  editors: '111',
  // Which editors are open. 1 is open. order is: HTML, CSS, JS.
  layout: 'top',
  // Optional layouts: top || left || right
  html: '',
  html_pre_processor: 'none',
  // Optional values: "none" || "slim" || "haml" || "markdown"
  css: '',
  css_pre_processor: 'none',
  // Optional values: "none" || "less" || "scss" || "sass" || "stylus"
  css_starter: 'normalize',
  // Optional values:  "normalize" || "reset" || "neither",
  css_prefix: 'neither',
  // Optional values:  "autoprefixer" || "prefixfree" || "neither"
  js: '',
  js_pre_processor: 'none',
  // Optional values: "none" || "coffeescript" || "babel" || "livescript" || "typescript"
  html_classes: '',
  // CSS class to apply to html tag.
  head:
    '<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no">',
  // Content to include inside the HTML head tag.
  css_external: '',
  // Use semi-colon to separate multiple files.
  js_external: '',
  // Use semi-colon to separate multiple files.
  // Optional values: true || false -
  // When the Pen is saved, it will save as Private if logged in user has that privilege,
  // otherwise it will save as public
  private: false,
  // If supplied, the Pen will save as a fork of this id.
  // Note it's not the slug, but ID.
  // You can find the ID of a Pen with `window.CP.pen.id` in the browser console.
  parent: null,
  // component internal
  label: 'See on CodePen',
  target: '',
  className: '',
  height: '50vh'
}

EmbedCodepen.propTypes = {
  html_pre_processor: PropTypes.oneOf([ 'none', 'slim', 'haml', 'markdown' ]),
  css_pre_processor: PropTypes.oneOf([ 'none', 'less', 'scss', 'sass', 'stylus' ]),
  js_pre_processor: PropTypes.oneOf([
    'none',
    'coffeescript',
    'babel',
    'livescript',
    'typescript'
  ])
}

export default EmbedCodepen
