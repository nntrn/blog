import { createGlobalStyle, css } from 'styled-components'
import { LightenDarkenColor } from './utils/theme'

const theme = {
  main: '#fff',
  link: '#0366d6',
  body: '#24292e',
  gray: '#586069',
  bg: '#f6f8fa',
  border: '#e1e4e8',
}

const GlobalStyle = createGlobalStyle`
:root {
  --bg-darken: ${(props) => LightenDarkenColor(props.link, 20)};
  --bg: ${(props) => props.bg};
  --border-color: ${(props) => props.border};
  --color-gray: ${(props) => props.gray};
  --color-link: ${(props) => props.link};
}
body {
  color: ${(props) => props.body};
  background: ${(props) => props.main};
}
a,.color-link{
  color: ${(props) => props.link};
}
.color-link-light{
   color: ${(props) => LightenDarkenColor(props.link, 80)}
}
.gray-light{
   color: ${(props) => LightenDarkenColor(props.gray, 80)}
}
`

const RS = (props) => {
  const themeStyle = {
    ...theme,
    props,
  }
  return <GlobalStyle {...themeStyle} {...props} />
}

const RootStyles = (props) => <GlobalStyle {...theme} />

export default RS
