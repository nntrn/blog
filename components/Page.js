import Head from 'next/head'

import { TagsList, SiteHead, Search } from './'
import RootStyles from '../src/root'
import config from '../blog.config'

const Page = (props) => {
  const { description, url, title, children, ...rest } = props
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

      <div className='page' {...rest}>
        <nav className="hide-mobile">
          <h4>TAGS</h4>
          <TagsList />
          <hr/>
          <a href={config.social.github}>
            <i className='fab fa-github fa-lg'/>
          </a>
        </nav>
        <section>
          <Search />
          {children}
        </section>
        <style jsx>{`
        section {
          margin: 0 auto;
          flex-grow: 3;
          width: 70%;
          padding: 0 2rem;
        }
        .page{margin:auto;display:flex;padding:1rem}
        h4{margin:0}
        nav ul, nav li{
          margin:0;
          padding:0;list-style-type:none;
          word-break:keep-all
        }
        `}</style>
      </div>

    </>
  )
}

Page.defaultProps = {
  title: '',
  description: '',
}

export default Page
