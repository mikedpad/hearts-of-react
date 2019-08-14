import React from 'react';
import { Helmet } from 'react-helmet';
import { Paper, IconButton, Typography, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/PersonAdd';
import AddIconDisabled from '@material-ui/icons/PersonAddDisabled';
import generateName from 'nomine-lipsum';
import { makeStyles } from '@material-ui/styles';
import { usePlayers } from './hooks/usePlayers';
import PlayerList from './UI/Player/PlayerList';

const useStyles = makeStyles(theme => ({
  playerStatsPaper: {
    margin: theme.spacing(2),
  },
  addBtn: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    minWidth: 0,
  },
}));

const NewGame = () => {
  const { players, addPlayer, isMaxPlayers } = usePlayers();
  const { playerStatsPaper, addBtn } = useStyles();
  const isMax = isMaxPlayers();

  const handleAddPlayer = () => {
    addPlayer(generateName());
  };

  return (
    <>
      <Helmet>
        <title>React Hearts: New Game</title>
      </Helmet>
      <Paper className={playerStatsPaper}>
        <Grid container>
          <Grid item xs={3}>
            <IconButton disabled={isMax} onClick={handleAddPlayer} className={addBtn}>
              {isMax ? <AddIconDisabled /> : <AddIcon />}
            </IconButton>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="body1">A minimum of 3 players are required!</Typography>
          </Grid>
        </Grid>
      </Paper>
      {players && <PlayerList players={players} />}
    </>
  );
};

export default NewGame;
