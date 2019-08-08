import React from 'react';
import { Link as ReachLink } from '@reach/router';
import { Link } from '@material-ui/core';
import { styled } from '@material-ui/styles';

const TextStyleLink = styled(Link)({
  textDecoration: `none`,
});

const TextLink = props => {
  const { children } = props;
  return (
    <TextStyleLink component={ReachLink} {...props}>
      {children}
    </TextStyleLink>
  );
};

export default TextLink;
