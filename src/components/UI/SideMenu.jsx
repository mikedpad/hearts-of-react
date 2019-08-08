import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemIcon, ListItemText, Divider, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/PersonAdd';
import { usePlayers } from '../hooks/usePlayers';
import Player from '../../game/player';
import ToolbarMenu from './ToolbarMenu';

const useStyles = makeStyles(theme => ({
  // addPlayer: {
  //   marginTop: theme.spacing(2),
  // },
  icon: {
    marginRight: theme.spacing(1),
  },
  list: {
    width: 250,
  },
}));

const SideMenu = ({ closeDrawer }) => {
  const classes = useStyles();
  const { addPlayer } = usePlayers();

  const handleAddPlayerClick = () => {
    addPlayer(new Player(`Mike`, 123));
  };

  return (
    <div className={classes.list} role="presentation" onClick={closeDrawer} onKeyDown={closeDrawer}>
      <ToolbarMenu onMenuClick={closeDrawer} />
      <Divider />
      <List>
        <ListItem button onClick={handleAddPlayerClick}>
          <ListItemIcon>
            <AddIcon className={classes.icon} />
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
