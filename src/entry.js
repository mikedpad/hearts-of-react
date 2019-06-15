import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { bg } from './styles/colors';
import { sansSerif } from './styles/fonts';
import Layout from './components/Layout';
import MainMenu from './components/MainMenu';
import NewGame from './components/NewGame';

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  :root {
    background-color: ${bg};
    font-family: ${sansSerif};
  }
`;

class Entry {
  constructor() {
    this.app = (
      <>
        <GlobalStyle />
        <Layout>
          <Router>
            <MainMenu path='/' />
            <NewGame path='/new' />
          </Router>
        </Layout>
      </>
    );

    this.run = () => {
      render(this.app, document.getElementById(`app`));
    };
  }
}

const EntryApp = new Entry();

EntryApp.run();

if (module.hot) {
  module.hot.accept(Entry.app, () => {
    Entry.run();
  });
}
