import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static getInitialProps(ctx) {
    return Document.getInitialProps(ctx)
  }

  render() {
    return (
      <html>
        <Head></Head>
        <body tabIndex="0">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
