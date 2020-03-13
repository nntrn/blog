import { useRouter } from 'next/router'
import Head from 'next/head'
import Highlight from 'react-highlight'

import Page from '../../components/Page'
import Preview from '../../components/Preview'
import Tags from '../../components/Tags'
import Links from '../../components/Links'
import blog from '../../summary.json'
import config from '../../blog.config'

const preBlockLang = {
  css: [ 'css', 'scss', 'sass', 'less', 'stylus', 'postcss' ],
  html: [ 'html', 'slim', 'haml', 'markdown', 'pug' ],
  js: [ 'js', 'babel', 'typescript', 'coffeescript', 'livescript' ],
  getAvailable: function (type, input = '') {
    return this[type].includes(input.toLowerCase()) ? input.toLowerCase() : type
  }
}

const Post = props => {
  const router = useRouter()
  const content = blog.filter(e => '/' + e.url === router.asPath)[0]

  const source = {
    html: '',
    css: '',
    js: ''
  }

  Object.keys(source).forEach(lang => {
    source[lang] =
      (content &&
        content.source
          .filter(e => preBlockLang[lang].includes(e.lang))
          .map(e => e.value)
          .join('\n')) ||
      ''
  })

  const title = (content && content.frontmatter.title) || ''
  const description = (content && content.frontmatter.description) || ''
  const url = (content && content.url) || ''

  return (
    <Page title={title} description={description} url={[ config.url, url ].join('')}>
      {/* <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta property='og:url' content={url} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
      </Head> */}
      <header>
        <h1>{title}</h1>
        {content && description && <em>{description}</em>}
      </header>
      <hr />

      {content && (content.frontmatter.codepen || content.frontmatter.preview) && (
        <Preview
          frontmatter={content.frontmatter}
          title={title}
          css={source.css}
          html={source.html}
          js={source.js}
          {...props}
        />
      )}
      <div style={{ margin: '1.5rem 0' }}>
        <Highlight innerHTML>{content && content.html}</Highlight>
      </div>
      {content && content.frontmatter && content.frontmatter.sources  && (
        <Links title='Source' links={content.frontmatter.sources} />
      )}
      {content && content.frontmatter && content.frontmatter.references && (
        <Links title='Reference' links={content.frontmatter.references} />
      )}
      {content && content.frontmatter.tags && (
        <Tags tags={content.frontmatter.tags}>
          <i className='fas fa-tags fa-sm'></i>
        </Tags>
      )}
    </Page>
  )
}

export default Post
