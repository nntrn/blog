import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import config from '../blog.config'

export default class MyDocument extends Document {
  render() {
    const GAScript = [
      'window.dataLayer = window.dataLayer || [];',
      'function gtag(){dataLayer.push(arguments);}',
      "gtag('js', new Date());",
      `gtag('config', '${config.GA}');`,
    ].join('\n')

    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()

    return (
      <html>
        <Head>{styleTags}</Head>
        <body>
          {main}
          <NextScript />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${config.GA}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: GAScript,
            }}
          />
        </body>
      </html>
    )
  }
}
