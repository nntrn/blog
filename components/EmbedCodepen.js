import PropTypes from 'prop-types'

const EmbedCodepen = props => {
  const { height, target, className, label, children, ...send } = props

  const handleOutputBar = ev => {
    ev.target.style.opacity = 0
  }

  return (
    <form
      action='https://codepen.io/pen/define'
      method='POST'
      target={target || 'iframe'}
      rel='noopener noreferrer'
      onSubmit={ev => handleOutputBar(ev)}
    >
      <input type='hidden' name='data' value={JSON.stringify(send)} />
      <button
        type='submit'
        title='View Codepen'
        style={{ border: 0, background: 'transparent' }}
      >
        {!children && <i className='fab fa-codepen fa-lg' />}
        {children && children}
      </button>
    </form>
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
  html_pre_processor: PropTypes.oneOf([ 'html', 'none', 'slim', 'haml', 'markdown' ]),
  css_pre_processor: PropTypes.oneOf([ 'css', 'none', 'less', 'scss', 'sass', 'stylus' ]),
  js_pre_processor: PropTypes.oneOf([
    'js',
    'none',
    'coffeescript',
    'babel',
    'livescript',
    'typescript'
  ])
}

export default EmbedCodepen
