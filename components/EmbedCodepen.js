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
      font: '12px sans-serif',
      textTransform: 'uppercase',
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
          style={{ ...style.button }}
          onClick={ev => handleButtonClick(ev)}
        >
          {label}
        </button>
      </form>
      <iframe
        name={iframeId}
        id={iframeId}
        referrerPolicy="no-referrer"
        scrolling="no"
        allowFullScreen={true}
        allowtransparency="true"
        style={{ width: '100%', height: '100%', overflow: 'hidden' }}
      ></iframe>
    </div>
  )
}

EmbedCodepen.defaultProps = {
  title: '',
  description: '',
  tags: [],
  // Which editors are open. 1 iss open. order is: HTML, CSS, JS.
  editors: '111',
  layout: 'top',
  html: '',
  html_pre_processor: 'none',
  css: '',
  css_pre_processor: 'none',
  css_starter: 'normalize',
  css_prefix: 'neither',
  js: '',
  js_pre_processor: 'none',
  html_classes: '',
  head:
    '<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no">',
  // Use semi-colon to separate multiple files.
  css_external: '',
  js_external: '',
  private: false,
  parent: null,
  // component internal
  label: 'View CodePen',
  target: '',
  className: '',
  height: '350px'
}

EmbedCodepen.propTypes = {
  layout: PropTypes.oneOf([ 'top', 'left', 'right' ]),
  css_starter: PropTypes.oneOf([ 'normalize', 'reset', 'neither' ]),
  css_prefix: PropTypes.oneOf([ 'autoprefixer', 'prefixfree', 'neither' ]),
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
