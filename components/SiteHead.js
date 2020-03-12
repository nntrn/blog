import Head from 'next/head'
import config from '../blog.config'

const SiteHead = props => {
  return (
    <Head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width, viewport-fit=cover' />
      <link rel='shortcut icon' href={config.favicon} />
      {props.children}

      {config.stylesheets &&
        config.stylesheets.map((stylesheet, i) => (
          <link key={i} rel='stylesheet' href={stylesheet} />
        ))}

      <script src='/routes.js' />
    </Head>
  )
}

export default SiteHead
