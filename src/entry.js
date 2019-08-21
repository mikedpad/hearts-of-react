import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import { CssBaseline, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import Home from './components/Home';
import Game from './components/Game';
import NewGame from './components/NewGame';
import theme from './styles/theme';
import { ContextualMenuProvider } from './components/hooks/useContextualMenu';

class Entry {
  constructor() {
    const respTheme = responsiveFontSizes(theme);
    this.app = (
      <MuiThemeProvider theme={respTheme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={3} autoHideDuration={3000} preventDuplicate>
          <ContextualMenuProvider>
            <Router>
              <Home path="/" />
              <Game path="game">
                <NewGame path="/" />
              </Game>
            </Router>
          </ContextualMenuProvider>
        </SnackbarProvider>
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
