import SiteHead from './SiteHead'
import Nav from './Nav'
import BLOG_CONFIG from '../blog.config'

const Page = props => {
  const { title, children, html, content, frontmatter, ...rest } = props
  return (
    <>
      <SiteHead
        title={title}
        description={props.description}
        stylesheets={BLOG_CONFIG.stylesheets}
        {...{ ...frontmatter, ...rest }}
      />
      <Nav />
      <div className="container-fluid">
        <header>
          <h1>{title}</h1>
        </header>
        <main>{children}</main>
      </div>
    </>
  )
}

Page.defaultProps = {
  title: '',
  description: ''
}

export default Page
