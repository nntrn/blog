import { useRef, useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border: 3px solid rgb(34, 34, 34);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 10px 4px;
  border-radius: 5px;
  height: ${props => props.h};
  position: relative;
  overflow: scroll;
  resize: vertical;
  .output {
    position: sticky;
    top: 0;
    padding: 0rem 0.25rem;
    font-family: sans-serif;
    font-size: 12px;
    background: black;
    color: #999;
    display: block;
  }
  iframe {
    width: 100%;
    overflow: scroll;
    height: 100%;
  }
`
const Preview = props => {
  const { html, css, js, height, stylesheets, title = 'Untitled', ...restProps } = props

  const refiFrame = useRef(null)

  const styleLinks = stylesheets
    .map(e => `<link rel='stylesheet' href='${e}'>`)
    .join('\n')

  useEffect(() => {
    var content = `<meta charset='utf-8'>
  <meta name='viewport' content='width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no'>
  ${styleLinks}
  <style>html,body{overflow:scroll;height:100vh;}</style>
  <style>${css}</style>
  ${html}
  <script>${js}</script>`

    var node = Object.assign(document.createElement('div'), {
      innerHTML: content
    })

    refiFrame.current.contentDocument.open()
    refiFrame.current.contentDocument.write(node.innerHTML)
    refiFrame.current.contentDocument.close()
  }, [])

  return (
    <Container h={props.height}>
      <span className="output">OUTPUT:</span>
      <iframe
        scrolling="yes"
        ref={refiFrame}
        title={title}
        allowFullScreen={true}
        sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts"
        src="/empty.html"
        {...restProps}
      />
    </Container>
  )
}
Preview.defaultProps = {
  stylesheets: ['https://necolas.github.io/normalize.css/8.0.1/normalize.css'],
  height: '300px'
}

export default Preview
