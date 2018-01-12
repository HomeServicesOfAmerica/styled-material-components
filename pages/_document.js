import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return (
      <html lang="en">
        <Head>
          <title>My page</title>
          {styleTags}
        </Head>
        <body style={{ overflow: 'visible' }}>
          <div className='root'>
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
}
