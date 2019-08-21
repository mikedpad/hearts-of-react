import React, { useState, useContext, useMemo, createContext } from 'react';
import { useSnackbar } from 'notistack';
import generateName from 'nomine-lipsum';
import Player from '../../game/player';
import { isMaxPlayers, doesPlayerExist } from '../../game/rules';

const PlayerContext = createContext();

function usePlayers() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error(`usePlayers must be used within a PlayerProvider`);
  }
  const { enqueueSnackbar } = useSnackbar();

  const [players, setPlayers] = context;

  function snackbarWarning(str, logError = false) {
    if (logError) {
      console.error(str);
    }
    return enqueueSnackbar(str, { variant: `warning` });
  }

  function addPlayer(playerName) {
    const playerCount = players.length;
    const isValidPlayerName = Boolean(playerName);

    // Check if player slots are available
    if (isMaxPlayers(playerCount)) {
      snackbarWarning(`Player limit reached! (7)`, true);
      return;
    }

    // Check if player name doesn't already exit
    if (doesPlayerExist(playerName, players)) {
      snackbarWarning(`There is already a player with this name!`, true);
      return;
    }

    // Check if a valid name was entered
    if (!isValidPlayerName) {
      snackbarWarning(`Name is not valid! Generating a random name...`);
    }

    setPlayers([...players, new Player(isValidPlayerName ? playerName : generateName())]);
  }

  function removePlayer(playerID) {
    setPlayers(players.filter(({ id }) => id !== playerID));
  }

  return {
    players,
    addPlayer,
    removePlayer,
    isMaxPlayers: () => isMaxPlayers(players.length),
  };
}

function PlayerProvider(props) {
  const [players, setPlayers] = useState([]);
  const value = useMemo(() => [players, setPlayers], [players]);
  return <PlayerContext.Provider value={value} {...props} />;
}

export { PlayerProvider, usePlayers };
