import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  hero: {
    display: `flex`,
    flexFlow: `column nowrap`,
    justifyContent: `center`,
    alignItems: `center`,
    height: `100vh`,
    width: `100vw`,
  },
}));

const HeroBox = ({ children }) => {
  const classes = useStyles();

  return <Box className={classes.hero}>{children}</Box>;
};

export default HeroBox;
