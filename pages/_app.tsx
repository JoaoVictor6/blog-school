import { AppProps } from "next/app";
import React from "react";
import GlobalStyle from "../src/GlobalStyle";

function index({Component, pageProps}:AppProps){
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} children={GlobalStyle}/>
    </>
  )
}

export default index;

