import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import theme from 'theme';
import NextNprogress from 'nextjs-progressbar';
import { ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import HeaderNav from 'components/Header/Navigation';
import usePageView from 'hooks/pageview';

// eslint-disable-next-line @typescript-eslint/naming-convention
const App = ({ Component, pageProps }: AppProps) => {
  usePageView();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="alternate" hrefLang="ja" href="https://potato.purplepalette.net/" />
        <link rel="alternate" hrefLang="en" href="https://potato.purplepalette.net/en/" />
        <link rel="alternate" hrefLang="x-default" href="https://potato.purplepalette.net/en/" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.3.1/dist/css/yakuhanjp.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NextNprogress
        color="rgba(175, 61, 231, 1)"
        startPosition={0.3}
        stopDelayMs={50}
        height={2}
      />
      <RecoilRoot>
        <ChakraProvider theme={theme}>
          <HeaderNav />
          <Component {...pageProps} />
        </ChakraProvider>
      </RecoilRoot>
    </>
  );
};

export default App;
