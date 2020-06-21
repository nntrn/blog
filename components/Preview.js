import { useRef, useEffect } from 'react'
import config from '../blog.config'

const Preview = (props) => {
  const { html, css, js, stylesheets, frontmatter, title = 'Untitled', ...restProps } = props
  const refFrame = useRef(null)
  const styleLinks = stylesheets.map((e) => `<link rel="stylesheet" href="${e}">`).join('\n')

  useEffect(() => {
    const content = [
      '<head>',
      '<meta http-equiv="X-UA-Compatible" content="IE=edge" />',
      '<meta charset="utf-8">',
      '<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no">',
      styleLinks,
      '<style>',
      'body{padding: 1rem}',
      css && `\n${css}\n`,
      '</style>',
      `<script src="${config.scripts.console}"></script>`,
      '</head>',
      '<body>',
      html && html,
      '<script>',
      js && js,
      '</script>',
      '</body>',
    ]

    var node = document.implementation.createHTMLDocument('New Document')
    node.documentElement.innerHTML = content.filter(Boolean).join('\n')

    refFrame.current.contentDocument.open()
    refFrame.current.contentDocument.write(node.documentElement.innerHTML)
    refFrame.current.contentDocument.close()
  })

  const iframeId = [ 'Embed', props.title.replace(/\s/g, '-') ].join('-')

  return (
    <div style={{height: frontmatter.previewHeight}}>
      <iframe
        scrolling='yes'
        ref={refFrame}
        name={iframeId}
        id={iframeId}
        title={title}
        allowFullScreen={true}
        sandbox='allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts'
        src='/empty.html'
        style={{ width: '100%', height: '100%', overflow: 'scroll' }}
        {...restProps}
      />
      <style jsx>{`
         iframe{
          box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.1);
          border-radius: 5px;
          position: relative;
          resize: vertical;
          min-height: 100px;
          background: white;
          border: 2px solid #24292e;
        }
  `}</style>
    </div>
  )
}

Preview.defaultProps = {
  stylesheets: [ 
    'https://necolas.github.io/normalize.css/8.0.1/normalize.css', 
    '/assets/preview.css' 
  ],
  frontmatter: {
    previewHeight: '500px',
  },
}

export default Preview
