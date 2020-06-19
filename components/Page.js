import Head from 'next/head'

import { TagsList, SiteHead, Search } from './'
import { TagList, Section } from '../src/styles'

import RootStyles from '../src/root'
import config from '../blog.config'

const Page = (props) => {
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

      <RootStyles main='#fff' />

      <div className='page' style={{ margin: 'auto', display: 'flex', padding: '1rem' }}>
        <TagList>
          <h4>TAGS</h4>
          <TagsList style={{ margin: '0' }} />

          <a href={config.social.github}>
            <i className='fab fa-github fa-lg'></i>
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
  description: '',
}

export default Page
