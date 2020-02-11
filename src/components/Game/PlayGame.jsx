import React from 'react';
import { Helmet } from 'react-helmet';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import { useGameState } from '../hooks/useGameState';
import GamePlayerList from '../UI/Player/List/GamePlayerList';

const useStyles = makeStyles(theme => ({
  addPlayerBox: {
    alignItems: `center`,
    display: `flex`,
    flexFlow: `row nowrap`,
    justifyContent: `space-between`,
    margin: theme.spacing(2, 0),
  },
}));

const PlayGame = () => {
  const { players, isInProgress, round } = useGameState();
  const { addPlayerBox } = useStyles();

  return (
    <>
      <Helmet>
        <title>React Hearts: Game In Progress</title>
      </Helmet>
      <Box className={addPlayerBox}>
        <Typography variant="h2">
          {isInProgress ? `Round ${round}` : `No Game In Progress`}
        </Typography>
      </Box>

      {players && <GamePlayerList />}
    </>
  );
};

export default PlayGame;
