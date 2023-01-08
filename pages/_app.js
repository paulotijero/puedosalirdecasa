import React from "react";
import App from "next/app";
import Head from "next/head";

import "../assets/application.scss";

export default class CanApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>¿Puedo salir de casa?</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
