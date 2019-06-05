import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import App from './app';

class Entry {
  constructor() {
    this.app = (
      <Router>
        <App path='/' />
      </Router>
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
