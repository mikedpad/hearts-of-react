import React, { useReducer, useContext, useMemo, createContext } from 'react';
import generateName from 'nomine-lipsum';
import { defaultState, reducer, actions } from '../../game/state';
import { minPlayers, maxPlayers } from '../../game/rules';
import useSnackMessages from './useSnackMessages';

const GameStateContext = createContext();

const useGameState = () => {
  // #region Context
  const context = useContext(GameStateContext);

  if (!context) {
    throw new Error(`useGameState must be used within a GameStateProvider`);
  }

  const [state, dispatch] = context;
  // #endregion

  const { msgError, msgWarning } = useSnackMessages();

  // #region Player Validation
  const doesPlayerExist = name => state.players.filter(p => p.name === name).length > 0;
  const isValidPlayerName = name => Boolean(name);
  // #endregion

  // #region State Functions
  const { newGame, startGame, nextRound, gameOver, addPlayer, removePlayer } = actions;
  const validatePlayer = name => {
    const isValidName = isValidPlayerName(name);

    // If game is full...
    if (state.players.length === maxPlayers) {
      msgError(`Player limit reached! (7)`);
      return;
    }

    // If player name already exits...
    if (doesPlayerExist(name)) {
      msgError(`There is already a player with this name!`);
      return;
    }

    // If name is invalid...
    if (!isValidName) {
      msgWarning(`Name is not valid! Generating a random name...`);
    }

    dispatch(addPlayer(isValidName ? name : generateName.full()));
  };
  // #endregion

  return {
    players: state.players,
    newGame: () => dispatch(newGame()),
    startGame: () => dispatch(startGame()),
    nextRound: () => dispatch(nextRound()),
    gameOver: () => dispatch(gameOver()),
    addPlayer: name => validatePlayer(name),
    removePlayer: id => dispatch(removePlayer(id)),
    isMaxPlayers: state.players.length === maxPlayers,
    isReadyToPlay: state.players.length >= minPlayers && state.players.length <= maxPlayers,
    isInProgress: state.isInProgress,
    round: state.round,
  };
};

function GameStateProvider(props) {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const value = useMemo(() => [state, dispatch], [state]);
  return <GameStateContext.Provider value={value} {...props} />;
}

export { GameStateProvider, useGameState };
