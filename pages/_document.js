import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
//import theme from '../src/theme';

import HeadTags from '../containers/HeadTags'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    }
  }

});


export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>


          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />


          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css" />

          <link rel="shortcut icon" href="/images/favicon.png" />
          <link
            rel="preload"
            href="https://nyaldox2.s3.us-east-2.amazonaws.com/Supernettcn-LightCondItalic.otf"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://nyaldox2.s3.us-east-2.amazonaws.com/Supernettcn-LightCondensed.otf"
            as="font"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            href="https://nyaldox2.s3.us-east-2.amazonaws.com/Supernettcn-Condensed.otf"
            as="font"
            crossOrigin="anonymous"
          />

        <link
            rel="preload"
            href="https://nyaldox2.s3.us-east-2.amazonaws.com/Supernettcn-CondensedItalic.otf"
            as="font"
            crossOrigin="anonymous"
          />

        <link
            rel="preload"
            href="https://nyaldox2.s3.us-east-2.amazonaws.com/Supernettcn-BoldCondensed.otf"
            as="font"
            crossOrigin="anonymous"
          />

<link
            rel="preload"
            href="https://nyaldox2.s3.us-east-2.amazonaws.com/Supernettcn-BoldCondItalic.otf"
            as="font"
            crossOrigin="anonymous"
          />


        </Head>


        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
