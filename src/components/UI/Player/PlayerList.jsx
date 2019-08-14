import React from 'react';
import PropTypes from 'prop-types';
import { List, ListSubheader } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PlayerListEntry from './PlayerListEntry';

const useStyles = makeStyles(theme => ({
  subheader: {
    color: `#ffffff99`,
    textTransform: `uppercase`,
    lineHeight: `normal`,
    padding: theme.spacing(0, 2, 1),
  },
}));

const PlayerList = ({ players }) => {
  const { subheader } = useStyles();

  return (
    <List>
      <ListSubheader className={subheader}>Players:</ListSubheader>
      {players.map(player => (
        <PlayerListEntry key={player.id} {...player} />
      ))}
    </List>
  );
};

export default PlayerList;

PlayerList.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      score: PropTypes.number,
    }),
  ).isRequired,
};
