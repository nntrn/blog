import Link from 'next/link'
import SiteHead from './SiteHead'
import Nav from './Nav'
import config from '../blog.config'

const Page = props => {
  const { title, children, html, content, frontmatter, ...rest } = props
  return (
    <>
      <SiteHead
        title={title}
        description={props.description}
        stylesheets={config.stylesheets}
        {...{ ...frontmatter, ...rest }}
      />
      <Link href="/">
        <h1 className="site-title">{config.title}</h1>
      </Link>
      <Nav routes={config.routes} />
      <div className="container-fluid">
        <header>
          <h1>{title}</h1>
        </header>
        <main>{children}</main>
      </div>
      <hr />
      <footer>&copy; {`${new Date().getUTCFullYear()} Annie Tran`}</footer>
    </>
  )
}

Page.defaultProps = {
  title: '',
  description: ''
}

export default Page
