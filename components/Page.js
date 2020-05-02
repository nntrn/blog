import Head from 'next/head'

import { TagsList, SiteHead, Search } from './'
import { TagList, Section } from '../src/styles'
import config from '../blog.config'

const Page = props => {
  const { description, url, title, children, html, content, frontmatter, ...rest } = props
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta property='og:url' content={url} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
      </Head>
      <SiteHead />

      <div style={{ display: 'flex', height: '100vh' }}>
        <TagList>
          <h4>TAGS</h4>
          <TagsList style={{ margin: '0' }} />
          <hr />
          <a href={config.social.github}>
            <i className='fab fa-github fa-lg' style={{ color: 'var(--color-github)' }}></i>
          </a>
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
