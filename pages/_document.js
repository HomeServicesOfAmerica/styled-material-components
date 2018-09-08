import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Styled Material Components</title>
          {this.props.styleTags}
        </Head>
        <body style={{ overflow: 'visible' }}>
          <div className="root" style={{ width: '100%' }}>
            <Main />
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
}
