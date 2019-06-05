import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header/Header';

export default () => (
  <>
    <Helmet>
      <title>This is a page title</title>
    </Helmet>
    <Header />
    <p>Lorem ipsum dolor sit amet...</p>
  </>
);
