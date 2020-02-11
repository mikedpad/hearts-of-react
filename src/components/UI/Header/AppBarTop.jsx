import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  labelStyle: {
    fontFamily: theme.typography.headline,
    fontSize: `2.5rem`,
    margin: theme.spacing(1.5, 0),
    textTransform: `uppercase`,
    textAlign: `center`,
  },
}));

const AppBarTop = ({ label }) => {
  const { labelStyle } = useStyles();

  return (
    <AppBar position="sticky" color="secondary">
      <Container maxWidth="xs">
        <Toolbar disableGutters>
          <Typography variant="h1" className={labelStyle}>
            {label}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarTop;

AppBarTop.propTypes = {
  label: PropTypes.string.isRequired,
};
