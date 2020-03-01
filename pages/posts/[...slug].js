import { useRouter } from 'next/router'
import Highlight from 'react-highlight'
import marked from '../../components/utils/marked'
import Page from '../../components/Page'
import EmbedCodepen from '../../components/EmbedCodepen'
import blog from '../../summary.json'

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
  const contentMd = (content && content.content) || '# markdown'
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

  const editorLayout = [
    source.html ? '1' : '0',
    source.css ? '1' : '0',
    source.js ? '1' : '0',
    source.js ? '1' : '0'
  ].join('')

  const title = (content && content.frontmatter.title) || 'title'
  const description = (content && content.frontmatter.description) || 'description'

  return (
    <Page title={title} description={description} {...content}>
      {content && content.frontmatter.codepen && (
        <EmbedCodepen
          title={title}
          description={description}
          js={source.js}
          css={source.css}
          html={source.html}
          tags={content && content.frontmatter.tags}
          height="350px"
          editors={editorLayout}
        />
      )}
      <Highlight innerHTML>{marked(contentMd)}</Highlight>
    </Page>
  )
}

export default Post
