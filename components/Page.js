import SiteHead from './SiteHead'
import Nav from './Nav'
import Container from './Container'
import config from '../blog.config'

const Page = props => {
  const { description, url, title, children, html, content, frontmatter, ...rest } = props
  return (
    <>
      <SiteHead />
      <Nav routes={config.routes} />
      {children}
      <Container
        component='footer'
        style={{
          padding: '3rem',
          marginTop: '2rem',
          boxShadow: 'inset 0 1px rgba(0,0,0,.15)',
          background: 'var(--light)',
          font: '.7em regular var(--font-family) '
        }}
      >
        <span>&copy; {`${new Date().getUTCFullYear()} Annie Tran`}</span>
      </Container>
    </>
  )
}

Page.defaultProps = {
  title: '',
  description: ''
}

export default Page
