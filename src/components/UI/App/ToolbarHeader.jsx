import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  menuBtn: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

const ToolbarHeader = ({ onMenuClick }) => {
  const { menuBtn, title } = useStyles();

  return (
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        className={menuBtn}
        onClick={onMenuClick}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h5" className={title}>
        React Hearts
      </Typography>
    </Toolbar>
  );
};

export default ToolbarHeader;

ToolbarHeader.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
};
