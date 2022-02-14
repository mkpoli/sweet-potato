import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { existsGaId, GA_ID } from 'framework/gtag';

class DefaultDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {existsGaId && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });`,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default DefaultDocument;
