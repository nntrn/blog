import Document, { Head, Main, NextScript } from 'next/document'
import { extractCritical } from '@emotion/server'

import config from '../blog.config'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage()
    const styles = extractCritical(page.html)
    return { ...page, ...styles }
  }

  render() {
    const GAScript = [ 'window.dataLayer = window.dataLayer || [];',
    'function gtag(){dataLayer.push(arguments);}',
    'gtag(\'js\', new Date());',
    `gtag('config', '${config.GA}');` ].join('\n')
    return (
      <html>
        <Head>
          <style
            data-emotion-css={this.props.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${config.GA}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: GAScript
            }}
          />
        </body>
      </html>
    )
  }
}
