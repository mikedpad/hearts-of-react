import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/PersonAdd';
import AddIconDisabled from '@material-ui/icons/PersonAddDisabled';
import { navigate } from '@reach/router';
import { useGameState } from '../hooks/useGameState';
import AddPlayerDialog from '../UI/Player/AddPlayerDialog';
import useSnackMessages from '../hooks/useSnackMessages';
import RoundIconButton from '../UI/Button/RoundIconButton';
import PlayerEntry from '../UI/Player/List/PlayerEntry';
import ContextualMenu from '../UI/Menu/ContextualMenu';
import BaseLayout from '../UI/Layout/BaseLayout';

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
  name: {
    fontSize: `0.75rem`,
    margin: theme.spacing(1.5, 1),
  },
  score: {
    fontSize: `0.75rem`,
    margin: theme.spacing(1.5, 6, 1.5, 1),
  },
}));

const NewGame = () => {
  const {
    players,
    removePlayer,
    startGame,
    isMaxPlayers,
    isReadyToPlay,
    isInProgress,
  } = useGameState();

  if (isInProgress) {
    navigate(`/game/play`);
  }

  const [dialogOpen, setDialogOpen] = useState(false);
  const { msgError } = useSnackMessages();
  const classes = useStyles();

  const handleRemovePlayer = id => removePlayer(id);

  const handleDialogOpen = () => {
    if (isMaxPlayers) {
      msgError(`Player limit reached! (7)`);
      return;
    }
    setDialogOpen(true);
  };
  const handleDialogClose = () => setDialogOpen(false);
  const handleButtonClick = async () => {
    startGame();
    await navigate(`/game/play`);
  };

  return (
    <BaseLayout
      title="New Game"
      footer={
        <Button
          onClick={handleButtonClick}
          variant="contained"
          color="secondary"
          disabled={!isReadyToPlay}
        >
          Start
        </Button>
      }
    >
      <RoundIconButton
        onClick={handleDialogOpen}
        Icon={isMaxPlayers ? AddIconDisabled : AddIcon}
        label="Add Player"
      />
      {players && (
        <>
          <List aria-label="player-list" className={classes.list}>
            <ListSubheader disableGutters disableSticky className={classes.subheader}>
              <Typography variant="h4" className={classes.name}>
                Name
              </Typography>
              <Typography variant="h4" className={classes.score}>
                Score
              </Typography>
            </ListSubheader>
            {players.map(({ id, name, score }) => (
              <PlayerEntry key={id} id={id} name={name} score={score} />
            ))}
          </List>
          <ContextualMenu
            menuItems={[
              {
                label: `Remove`,
                onClickFunc: handleRemovePlayer,
              },
            ]}
          />
        </>
      )}
      <AddPlayerDialog isOpen={dialogOpen && !isMaxPlayers} handleClose={handleDialogClose} />
    </BaseLayout>
  );
};

export default NewGame;
