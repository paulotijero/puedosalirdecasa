import React from "react";
import App from "next/app";
import Head from "next/head"

import "../assets/styles.css";

export default class CanApp extends App {
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
