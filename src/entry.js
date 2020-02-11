import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import { CssBaseline, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import Home from './components/Home';
import theme from './styles/theme';
import { ContextualMenuProvider } from './components/hooks/useContextualMenu';
import { GameStateProvider } from './components/hooks/useGameState';
import NotFound from './components/Pages/NotFound';
import NewGame from './components/Game/NewGame';
import PlayGame from './components/Game/PlayGame';

class Entry {
  constructor() {
    const respTheme = responsiveFontSizes(theme);
    this.app = (
      <MuiThemeProvider theme={respTheme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={3} autoHideDuration={3000} preventDuplicate>
          <ContextualMenuProvider>
            <GameStateProvider>
              <Router>
                <Home path="/" />
                <NewGame path="/game/new" />
                <PlayGame path="/game/play" />
                <NotFound default />
              </Router>
            </GameStateProvider>
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
