import {useRef, useEffect} from 'react';
import styled from 'styled-components';

import EmbedCodepen from './EmbedCodepen';

const Container = styled.div`
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.35);
  border-radius: 5px;
  height: ${(props) => props.h};
  position: relative;
  overflow: hidden;
  resize: vertical;
  min-height: 100px;
  max-height: 100vh;
  margin: 1.5rem 0;
  .output {
    position: absolute;
    background: white;
    width: 100%;
    top: 0;
    font-family: sans-serif;
    font-size: 0.8em;
    color: #000;
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    span {
      padding: 0 0.25rem;
    }
    button {
      &:hover {
        opacity: 0.7;
      }
    }
  }
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
    height,
    title = 'Untitled',
    ...restProps
  } = props;

  const refiFrame = useRef(null);

  const styleLinks = stylesheets
    .map((e) => `<link rel='stylesheet' href='${e}'>`)
    .join('\n');

  useEffect(() => {
    const content = [
      '<meta charset="utf-8">',
      '<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no">',
      styleLinks,
      '<style>body{padding: 2rem 1rem}</style>',
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
  }, []);

  const iframeId = [ 'Embed', props.title.replace(/\s/g, '-') ].join('-');

  return (
    <Container h={frontmatter.height || height}>
      <div className="output">
        <span>OUTPUT</span>
        <EmbedCodepen
          title={title}
          target={iframeId}
          js={js}
          css={css}
          html={html}
          tags={frontmatter.tags}
        />
      </div>
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
  height: '300px'
};

export default Preview;
