import React from 'react';
import { Link } from '@reach/router';
import { Button } from '@material-ui/core';

const ButtonLink = props => {
  const { children } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Button component={Link} {...props}>
      {children}
    </Button>
  );
};

export default ButtonLink;
