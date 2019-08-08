import React from 'react';
import { Link } from '@reach/router';
import { Button } from '@material-ui/core';

const ButtonLink = props => {
  const { children } = props;
  return (
    <Button component={Link} {...props}>
      {children}
    </Button>
  );
};

export default ButtonLink;
