import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText } from '@material-ui/core';

const PlayerList = ({ players }) => (
  <List>
    {players.map(player => (
      <ListItem button key={player}>
        <ListItemText primary={player} />
      </ListItem>
    ))}
  </List>
);

export default PlayerList;

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.string).isRequired,
};
