import React from 'react';
import { Helmet } from 'react-helmet';
import { List, ListItem, ListItemText, makeStyles, Avatar } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { usePlayers } from './hooks/usePlayers';

const useStyles = makeStyles(() => ({
  avatar: {
    margin: 10,
  },
}));

const NewGame = () => {
  const { players } = usePlayers();
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>React Hearts: New Game</title>
      </Helmet>
      {players && (
        <List>
          {players.map(player => (
            <ListItem button divider key={player.id}>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
              <ListItemText primary={player.name} />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default NewGame;
