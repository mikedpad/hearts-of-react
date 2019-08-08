import React, { useState, useContext, useMemo, createContext } from 'react';

const PlayerContext = createContext();

function usePlayers() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error(`usePlayers must be used within a PlayerProvider`);
  }

  const [players, setPlayers] = context;

  const removePlayer = playerID => {
    setPlayers(players.filter(player => player.id !== playerID));
  };

  const addPlayer = newPlayer => {
    setPlayers([...players, newPlayer]);
  };

  return {
    players,
    addPlayer,
    removePlayer,
  };
}

function PlayerProvider(props) {
  const [players, setPlayers] = useState([]);
  const value = useMemo(() => [players, setPlayers], [players]);
  return <PlayerContext.Provider value={value} {...props} />;
}

export { PlayerProvider, usePlayers };
