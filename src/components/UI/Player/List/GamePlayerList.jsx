import React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { useGameState } from '../../../hooks/useGameState';
import PlayerEntry from './PlayerEntry';

const useStyles = makeStyles(theme => ({
  list: {
    display: `flex`,
    flexFlow: `column nowrap`,
  },
  subheader: {
    alignItems: `center`,
    display: `flex`,
    justifyContent: `space-between`,
    textTransform: `uppercase`,
    lineHeight: `normal`,
    borderBottom: `1px solid ${theme.palette.list.headerBorder}`,
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.list.header,
  },
  nameStyle: {
    fontSize: `0.75rem`,
    margin: theme.spacing(1.5, 1),
  },
  scoreStyle: {
    fontSize: `0.75rem`,
    margin: theme.spacing(1.5, 6, 1.5, 1),
  },
}));

const GamePlayerList = () => {
  const { players } = useGameState();
  const { list, subheader, nameStyle, scoreStyle } = useStyles();

  return (
    <List aria-label="player-list" className={list}>
      <ListSubheader disableGutters disableSticky className={subheader}>
        <Typography variant="h4" className={nameStyle}>
          Name
        </Typography>
        <Typography variant="h4" className={scoreStyle}>
          Score
        </Typography>
      </ListSubheader>
      {players.map(({ id, name, score }) => (
        <PlayerEntry key={id} id={id} name={name} score={score} />
      ))}
    </List>
  );
};

export default GamePlayerList;
