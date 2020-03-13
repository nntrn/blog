import {useRef, useEffect} from 'react';
import styled from '@emotion/styled'

// import EmbedCodepen from './EmbedCodepen';

const Container = styled.div`
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  height: ${(props) => props.height || '400px'};
  position: relative;
  overflow: hidden;
  resize: vertical;
  min-height: 100px;
  margin: 1.5rem 0;
  
  iframe {
    width: 100%;
    height: 100%;
  }
`;

const Preview = (props) => {
  const {
    html,
    css,
    js,
    stylesheets,
    frontmatter,
    title = 'Untitled',
    ...restProps
  } = props;

  const refiFrame = useRef(null);

  const styleLinks = stylesheets
    .map((e) => `<link rel="stylesheet" href="${e}">`)
    .join('\n');

  useEffect(() => {
    const content = [
      '<meta charset="utf-8">',
      '<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no">',
      styleLinks,
      '<style>body{padding: 1rem}</style>',
      css && `<style>\n${css}\n</style>`,
      '</style>',
      html,
      `<script>\n${js}\n</script>`
    ]
      .filter(Boolean)
      .join('\n');

    var node = Object.assign(document.createElement('div'), {
      innerHTML: content
    });

    refiFrame.current.contentDocument.open();
    refiFrame.current.contentDocument.write(node.innerHTML);
    refiFrame.current.contentDocument.close();
  });

  const iframeId = [ 'Embed', props.title.replace(/\s/g, '-') ].join('-');

  const previewHeight = /^[0-9]+$/.test(frontmatter.previewHeight) ? frontmatter.previewHeight + 'px' : frontmatter.previewHeight
  
  return (
    <Container height={previewHeight}>
      <iframe
        scrolling="yes"
        ref={refiFrame}
        name={iframeId}
        id={iframeId}
        title={title}
        allowFullScreen={true}
        sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts"
        src="/empty.html"
        {...restProps}
      />
    </Container>
  );
};

Preview.defaultProps = {
  stylesheets: ['https://necolas.github.io/normalize.css/8.0.1/normalize.css'],
  frontmatter: {
    previewHeight: 500
  }
};

export default Preview;
