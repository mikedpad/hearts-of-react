import React, { useReducer, useContext, useMemo, createContext } from 'react';
import Player from '../../game/player';
import { minPlayers, maxPlayers } from '../../game/rules';
import { defaultState, reducer } from './reducers/gameStateReducer';

const GameStateContext = createContext();

const useGameState = () => {
  const context = useContext(GameStateContext);
  if (!context) {
    throw new Error(`useGameState must be used within a GameStateProvider`);
  }
  const [state, dispatch] = context;

  return {
    players: state.players,
    listOfPlayers: state.players.map(p => p.name),
    newGame: () => dispatch({ type: `NEW_GAME` }),
    startGame: () => dispatch({ type: `START_GAME` }),
    nextRound: () => dispatch({ type: `NEXT_ROUND` }),
    gameOver: () => dispatch({ type: `GAME_OVER` }),
    addPlayer: name => dispatch({ type: `ADD_PLAYER`, payload: new Player(name) }),
    removePlayer: id => dispatch({ type: `REMOVE_PLAYER`, payload: id }),
    isMaxPlayers: state.players.length === maxPlayers,
    isReadyToPlay: state.players.length >= minPlayers && state.players.length <= maxPlayers,
    isInProgress: state.isInProgress,
    round: state.round,
  };
};

function GameStateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const value = useMemo(() => [state, dispatch], [state]);
  return <GameStateContext.Provider value={value}>{children}</GameStateContext.Provider>;
}

export { GameStateProvider, useGameState };
