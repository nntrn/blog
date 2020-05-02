const aliases = {
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: ['marginLeft', 'marginRight'],
  my: ['marginTop', 'marginBottom'],
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: ['paddingLeft', 'paddingRight'],
  py: ['paddingTop', 'paddingBottom']
}

const Text = props => {
  const { component: Component = props.as, as, sx, children, style, ...rest } = props

  var propStyles = {
    ...Object.entries(sx)
      .map(e => {
        var css = {}

        if (Array.isArray(aliases[e[0]])) {
          aliases[e[0]].forEach(c => {
            css[c] = e[1]
          })
        } else {
          css[aliases[e[0]] ? aliases[e[0]] : e[0]] = e[1]
        }
        return css
      })
      .reduce((a, b) => Object.assign(a, b), {})
  }

  return (
    <Component style={{ ...style, ...propStyles }} {...rest}>
      {children}
    </Component>
  )
}

Text.defaultProps = {
  as: 'span',
  size: 'inherit'
}

export default Text
