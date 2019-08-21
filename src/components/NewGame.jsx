import React from 'react';
import { Helmet } from 'react-helmet';
import { IconButton, Box, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/PersonAdd';
import AddIconDisabled from '@material-ui/icons/PersonAddDisabled';
import { makeStyles } from '@material-ui/styles';
import { usePlayers } from './hooks/usePlayers';
import PlayerList from './UI/Player/PlayerList';
import ContextualMenu from './UI/Menu/ContextualMenu';

const useStyles = makeStyles(theme => ({
  newGameContentBox: {
    margin: theme.spacing(2),
  },
  addPlayerBox: {
    display: `flex`,
    flexFlow: `row nowrap`,
    margin: theme.spacing(2, 0),
  },
  txtField: {
    flex: `1 1 auto`,
  },
  addBtn: {
    flex: `0 1 auto`,
    padding: theme.spacing(2),
    minWidth: 0,
  },
}));

const NewGame = () => {
  const { players, addPlayer, removePlayer, isMaxPlayers } = usePlayers();
  const { addPlayerBox, newGameContentBox, txtField, addBtn } = useStyles();
  const isMax = isMaxPlayers();

  function handleAddClick() {
    // Get the element handle
    const el = document.querySelector(`#player-name`);

    // Use the element's value as a name
    addPlayer(el.value);

    // Clear the value
    el.value = null;

    // If more players can be added, keep element focused
    if (isMax) {
      el.blur();
    }
  }

  function handleKeyPress(evt) {
    if (evt.key === `Enter`) {
      handleAddClick();
    }
  }

  function handleRemovePlayer(id) {
    removePlayer(id);
  }

  return (
    <>
      <Helmet>
        <title>React Hearts: New Game</title>
      </Helmet>
      <Box className={newGameContentBox}>
        <Box className={addPlayerBox}>
          <TextField
            id="player-name"
            label={isMax ? `Max Players Reached` : `Add Player`}
            className={txtField}
            disabled={isMax}
            onKeyPress={handleKeyPress}
          />
          <IconButton onClick={handleAddClick} className={addBtn} disabled={isMax}>
            {isMax ? <AddIconDisabled /> : <AddIcon />}
          </IconButton>
        </Box>
        {players && <PlayerList players={players} />}
      </Box>
      <ContextualMenu
        menuItems={[
          {
            label: `Remove`,
            onClickFunc: handleRemovePlayer,
          },
        ]}
      />
    </>
  );
};

export default NewGame;
