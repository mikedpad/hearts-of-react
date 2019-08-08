import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  shimToolbar: {
    pointerEvents: `none`,
  },
}));

const ToolbarMenu = ({ onMenuClick }) => {
  const classes = useStyles();

  return (
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        className={classes.menuButton}
        onClick={onMenuClick}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h5" className={classes.title}>
        React Hearts
      </Typography>
    </Toolbar>
  );
};

export default ToolbarMenu;

ToolbarMenu.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
};
