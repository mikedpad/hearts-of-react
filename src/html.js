/* eslint-disable react/forbid-prop-types, react/no-danger */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Html extends Component {
  render() {
    const {
      headComponents,
      preBodyComponents,
      body,
      postBodyComponents,
    } = this.props;

    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          <meta name='referrer' content='origin' />
          <meta
            name='description'
            content='Portland-based smart device repair shops'
          />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='theme-color' content='#171c28' />
          <link rel='manifest' href='/manifest.webmanifest' />
          <link rel='shortcut icon' href='/favicon.ico' />
          {headComponents}
        </head>
        <body>
          {preBodyComponents}
          <div
            key='body'
            id='___gatsby'
            dangerouslySetInnerHTML={{ __html: body }}
          />
          {postBodyComponents}
        </body>
      </html>
    );
  }
}

export default Html;

Html.propTypes = {
  headComponents: PropTypes.array.isRequired,
  preBodyComponents: PropTypes.array.isRequired,
  body: PropTypes.string.isRequired,
  postBodyComponents: PropTypes.array.isRequired,
};
