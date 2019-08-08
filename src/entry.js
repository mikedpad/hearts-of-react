import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import Home from './components/Home';
import Game from './components/Game';
import NewGame from './components/NewGame';
import theme from './styles/theme';

class Entry {
  constructor() {
    // const responsiveTheme = responsiveFontSizes(theme);
    this.app = (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Home path="/" />
          <Game path="game">
            <NewGame path="/" />
          </Game>
        </Router>
      </MuiThemeProvider>
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
