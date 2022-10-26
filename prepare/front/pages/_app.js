import React from "react";
import Head from "next/head";
import propTypes from "prop-types";
import "antd/dist/antd.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>React Clone Insta</title>
        <meta charSet="utf-8" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: propTypes.elementType.isRequired,
  pageProps: propTypes.object,
};
