import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AddIcon from '@material-ui/icons/PersonAdd';
import generateName from 'nomine-lipsum';
import { usePlayers } from '../hooks/usePlayers';
import ToolbarMenu from './ToolbarMenu';

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.primary,
    color: theme.palette.text,
  },
  list: {
    width: 250,
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const SideMenu = ({ closeDrawer }) => {
  const { addPlayer } = usePlayers();
  const { paper, list, icon } = useStyles();

  const handleAddPlayerClick = () => {
    addPlayer(generateName());
  };

  return (
    <div className={list} role="presentation" onClick={closeDrawer} onKeyDown={closeDrawer}>
      <Paper square className={paper}>
        <ToolbarMenu color="primary" onMenuClick={closeDrawer} />
      </Paper>
      <Divider />
      <List>
        <ListItem button onClick={handleAddPlayerClick}>
          <ListItemIcon>
            <AddIcon className={icon} />
          </ListItemIcon>
          <ListItemText>Add Players</ListItemText>
        </ListItem>
      </List>
    </div>
  );
};

export default SideMenu;

SideMenu.propTypes = {
  closeDrawer: PropTypes.func.isRequired,
};
