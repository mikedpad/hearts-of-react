import React, { useState, useContext, useMemo, createContext } from 'react';
import { useSnackbar } from 'notistack';
import Player from '../../game/player';
// import Rules from '../../game/rules';

const PlayerContext = createContext();

function usePlayers() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error(`usePlayers must be used within a PlayerProvider`);
  }
  const { enqueueSnackbar } = useSnackbar();

  const [players, setPlayers] = context;

  const minPlayers = 3;
  const maxPlayers = 7;

  const snackbar = {
    warning: {
      maximumReached: () =>
        enqueueSnackbar(`You have already reached the maximum amount of players! (7)`, {
          variant: `warning`,
        }),
    },
  };

  const isReadyToPlay = () => players.length >= minPlayers && players.length <= maxPlayers;
  const isMaxPlayers = () => players.length === maxPlayers;

  const addPlayer = playerName => {
    if (players.length < maxPlayers) {
      setPlayers([...players, new Player(playerName)]);
      return;
    }

    snackbar.warning.maximumReached();
  };

  const removePlayer = playerID => {
    setPlayers(players.filter(({ id }) => id !== playerID));
  };

  return {
    players,
    addPlayer,
    removePlayer,
    isReadyToPlay,
    isMaxPlayers,
    snackbar,
  };
}

function PlayerProvider(props) {
  const [players, setPlayers] = useState([]);
  const value = useMemo(() => [players, setPlayers], [players]);
  return <PlayerContext.Provider value={value} {...props} />;
}

export { PlayerProvider, usePlayers };
