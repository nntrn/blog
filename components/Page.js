import SiteHead from './SiteHead'
import Search from './Search'

import TagsList from './TagsList'
import { TagList, Section } from '../src/styles'
import config from '../blog.config'

const Page = props => {

  const { description, url, title, children, html, content, frontmatter, ...rest } = props
  return (
    <>
      <SiteHead />
      <div style={{ display: 'flex', height: '100vh' }}>
        <TagList>
          <h4>TAGS</h4>
          <TagsList style={{ margin: '0' }} />
        </TagList>
        <Section>
          <Search />
          {children}
        </Section>
      </div>
    </>
  )
}

Page.defaultProps = {
  title: '',
  description: ''
}

export default Page
