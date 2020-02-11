/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link as ReachLink } from '@reach/router';
import { Link } from '@material-ui/core';

const TextLink = props => {
  const { children } = props;

  return (
    <Link underline="none" component={ReachLink} {...props}>
      {children}
    </Link>
  );
};

export default TextLink;
