import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head>
          {/* <!-- Primary Meta Tags --> */}
          <link rel="icon" href="/question.png" />
          <meta
            name="description"
            content="¿Puedo salir de casa? La página que te resuelve todas las dudas."
          />
          <meta name="language" content="es" />
          <meta name="author" content="paulotijero" />
          <meta
            name="subject"
            content="¿Puedo salir de casa? La página que te resuelve todas las dudas."
          />
          <meta name="pagename" content="puedosalirdecasa" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="MobileOptimized" content="320" />
          <meta name="robots" content="index, follow" />
          <meta name="theme-color" content="black" />
          <meta
            name="apple-mobile-web-app-title"
            content="¿Puedo salir de casa?"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta
            href="/atom.xml"
            type="application/atom+xml"
            rel="alternate"
            title="¿Puedo salir de casa?"
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="¿Puedo salir de casa?" />
          <meta
            property="og:description"
            content="¿Puedo salir de casa? La página que te resuelve todas las dudas."
          />
          <meta
            property="og:image"
            content="https://puedosalirdecasa.fun/puedosalirdecasa.jpg"
          />
          <meta
            property="og:image:alt"
            content="¿Puedo salir de casa? La página que te resuelve todas las dudas."
          />
          <meta property="og:url" content="https://puedosalirdecasa.fun/" />
          <meta property="og:site_name" content="¿Puedo salir de casa?" />
          <meta property="og:locale" content="es" />

          {/* <!-- Twitter --> */}
          <meta
            name="twitter:card"
            value="summary_large_image"
            content="summary_large_image"
          />
          <meta
            name="twitter:site"
            value="@paulotijero"
            content="@paulotijero"
          />
          <meta
            name="twitter:creator"
            value="@paulotijero"
            content="@paulotijero"
          />
          <meta
            name="twitter:url"
            value="https://puedosalirdecasa.fun/"
            content="https://puedosalirdecasa.fun/"
          />
          <meta
            name="twitter:title"
            value="OpenTech"
            content="¿Puedo salir de casa?"
          />
          <meta
            name="twitter:description"
            value="¿Puedo salir de casa? La página que te resuelve todas las dudas."
            content="¿Puedo salir de casa? La página que te resuelve todas las dudas."
          />
          <meta
            name="twitter:image"
            value="https://puedosalirdecasa.fun/puedosalir.jpg"
            content="https://puedosalirdecasa.fun/puedosalir.jpg"
          />
          <meta
            name="twitter:summary"
            content="¿Puedo salir de casa? La página que te resuelve todas las dudas."
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
