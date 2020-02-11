import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/styles';
import { navigate } from '@reach/router';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/PersonAdd';
import AddIconDisabled from '@material-ui/icons/PersonAddDisabled';
import { useGameState } from '../hooks/useGameState';
import AddPlayerDialog from '../UI/Player/AddPlayerDialog';
import useSnackMessages from '../hooks/useSnackMessages';
import RoundIconButton from '../UI/Button/RoundIconButton';
import PlayerEntry from '../UI/Player/List/PlayerEntry';
import ContextualMenu from '../UI/Menu/ContextualMenu';
import PageTitle from '../UI/Title/PageTitle';
import AppBarBottom from '../UI/Footer/AppBarBottom';
import AppBarTop from '../UI/Header/AppBarTop';

const useStyles = makeStyles(theme => ({
  content: {
    margin: theme.spacing(2, 0),
  },
  addPlayerBox: {
    alignItems: `center`,
    display: `flex`,
    flexFlow: `row nowrap`,
    justifyContent: `space-between`,
  },
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
  const [dialogOpen, setDialogOpen] = useState(false);
  const { players, removePlayer, startGame, isMaxPlayers, isReadyToPlay } = useGameState();
  const { msgError } = useSnackMessages();
  const classes = useStyles();

  // const handleRenamePlayer = id => removePlayer(id);
  const handleRemovePlayer = id => removePlayer(id);

  const handleDialogOpen = () => {
    if (isMaxPlayers) {
      msgError(`Player limit reached! (7)`);
    }
    setDialogOpen(true);
  };
  const handleDialogClose = () => setDialogOpen(false);
  const handleButtonClick = async () => {
    await navigate(`/game/play`);
    startGame();
  };

  return (
    <>
      <Helmet>
        <title>React Hearts: New Game</title>
      </Helmet>
      <AppBarTop label="React Hearts" />
      <main>
        <Container maxWidth="xs">
          <Box className={classes.content}>
            <PageTitle label="New Game" />
            <Box className={classes.addPlayerBox}>
              <RoundIconButton
                onClick={handleDialogOpen}
                Icon={isMaxPlayers ? AddIconDisabled : AddIcon}
                label="Add Player"
              />
            </Box>
          </Box>
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
                  <PlayerEntry key={id} name={name} score={score} />
                ))}
              </List>
              <ContextualMenu
                menuItems={[
                  // {
                  //   label: `Rename`,
                  //   onClickFunc: handleRenamePlayer,
                  // },
                  {
                    label: `Remove`,
                    onClickFunc: handleRemovePlayer,
                  },
                ]}
              />
            </>
          )}
          <AddPlayerDialog isOpen={dialogOpen && !isMaxPlayers} handleClose={handleDialogClose} />
        </Container>
      </main>
      <AppBarBottom>
        <Button
          onClick={handleButtonClick}
          variant="contained"
          color="secondary"
          disabled={!isReadyToPlay}
        >
          Start
        </Button>
      </AppBarBottom>
    </>
  );
};

export default NewGame;
