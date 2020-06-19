import { useRef, useEffect } from 'react'
import styled from 'styled-components'

import config from '../blog.config'

const Container = styled.div`
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  height: ${(props) => props.height || '300px'};
  position: relative;
  overflow: hidden;
  resize: vertical;
  min-height: 100px;
  background: white;
  margin: 1.5rem 0;

  iframe {
    width: 100%;
    height: 100%;
    overflow: scroll;
  }
`

const Preview = (props) => {
  const { html, css, js, stylesheets, frontmatter, title = 'Untitled', ...restProps } = props
  const refiFrame = useRef(null)
  const styleLinks = stylesheets.map((e) => `<link rel="stylesheet" href="${e}">`).join('\n')

  useEffect(() => {
    const content = [
      '<head>',
      '<meta charset="utf-8">',
      '<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no">',
      styleLinks,
      '<style>\nbody{padding: 1rem}',
      css && `\n${css}\n`,
      '</style>',
      '</head>',
      '<body>',
      html,
      '<script>',
      `${js}`,
      '</script>',
      '</body>',
    ]

    var node = document.implementation.createHTMLDocument('New Document')
    node.documentElement.innerHTML = content.filter(Boolean).join('\n')

    refiFrame.current.contentDocument.open()
    refiFrame.current.contentDocument.write(node.documentElement.innerHTML)
    refiFrame.current.contentDocument.close()
  })

  const iframeId = ['Embed', props.title.replace(/\s/g, '-')].join('-')

  const previewHeight = /^[0-9]+$/.test(frontmatter.previewHeight)
    ? frontmatter.previewHeight + 'px'
    : frontmatter.previewHeight

  return (
    <Container height={previewHeight}>
      <iframe
        scrolling='yes'
        ref={refiFrame}
        name={iframeId}
        id={iframeId}
        title={title}
        allowFullScreen={true}
        sandbox='allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts'
        src='/empty.html'
        {...restProps}
      />
    </Container>
  )
}

Preview.defaultProps = {
  stylesheets: ['https://necolas.github.io/normalize.css/8.0.1/normalize.css'],
  frontmatter: {
    previewHeight: 500,
  },
}

export default Preview
