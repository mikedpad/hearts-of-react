import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText, Divider, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ToolbarHeader from '../App/ToolbarHeader';

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.primary,
    color: theme.palette.text,
  },
  list: {
    width: 250,
  },
}));

const SideMenu = ({ closeDrawer }) => {
  const { paper, list } = useStyles();

  return (
    <div className={list} role="presentation" onClick={closeDrawer} onKeyDown={closeDrawer}>
      <Paper square className={paper}>
        <ToolbarHeader color="primary" onMenuClick={closeDrawer} />
      </Paper>
      <Divider />
      <List>
        <ListItem button>
          <ListItemText>Item 1</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Item 2</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Item 3</ListItemText>
        </ListItem>
      </List>
    </div>
  );
};

export default SideMenu;

SideMenu.propTypes = {
  closeDrawer: PropTypes.func.isRequired,
};
