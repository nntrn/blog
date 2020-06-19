import Head from 'next/head'
import config from '../blog.config'

const SiteHead = (props) => {
  return (
    <Head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width, viewport-fit=cover' />
      <link rel='shortcut icon' href={config.favicon} />
      <meta property='og:type' content='website' />
      <meta property='og:site-name' content={config.title}></meta>
      {config.stylesheets &&
        config.stylesheets.map((stylesheet, i) => (
          <link key={i} rel='stylesheet' href={stylesheet} />
        ))}
    </Head>
  )
}

export default SiteHead
