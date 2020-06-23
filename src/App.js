import React, { Fragment } from 'react';
import Header from "./layout/header";
import { BrowserRouter } from "react-router-dom";
import BaseRouter from "./routes";
import Footer from './layout/footer';


export default app => (
  <Fragment>
    <BrowserRouter>
        <Header />
        <BaseRouter />
        <Footer />
      </BrowserRouter>
  </Fragment>
)