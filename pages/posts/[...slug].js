import { useRouter } from 'next/router'
import marked from 'marked'
import Highlight from 'react-highlight'
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
  const slug = router.query.slug || []

  var content = blog.filter(e => '/' + e.url === router.asPath)[0]
  var contentMd = (content && content.content) || '# hi'

  var source = {
    css:
      (content &&
        content.source
          .filter(e => preBlockLang.css.includes(e.lang))
          .map(e => e.value)
          .join('\n')) ||
      '',
    html:
      (content &&
        content.source
          .filter(e => preBlockLang.html.includes(e.lang))
          .map(e => e.value)
          .join('\n')) ||
      '',
    js:
      (content &&
        content.source
          .filter(e => preBlockLang.js.includes(e.lang))
          .map(e => e.value)
          .join('\n')) ||
      ''
  }

  const title = (content && content.frontmatter.title) || 'title'
  const description = (content && content.frontmatter.description) || 'description'

  return (
    <Page title={title} description={description} { ...content }>
      <EmbedCodepen
        className="simple-link"
        title={title}
        description={description}
        js={source.js}
        css={source.css}
        html={source.html}
        editors="39008"
        height="300px"
      />
      <Highlight innerHTML>{marked(contentMd)}</Highlight>
    </Page>
  )
}

export default Post
