import PropTypes from 'prop-types'
import Head from 'next/head'

import BLOG_CONFIG from '../blog.config'

const SiteHead = props => {
  const title = [ props.title, BLOG_CONFIG.title ].filter(Boolean).join(' | ')
  const description = props.description || BLOG_CONFIG.description
  
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <link rel="shortcut icon" href={BLOG_CONFIG.favicon} />
      <meta property="og:url" content={props.url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {props.stylesheets &&
        props.stylesheets.map((stylesheet, i) => (
          <link key={i} rel="stylesheet" href={stylesheet} />
        ))}
    </Head>
  )
}

SiteHead.defaultProps = {
  title: BLOG_CONFIG.title,
  description: BLOG_CONFIG.description
}

SiteHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stylesheets: PropTypes.array
}

export default SiteHead
