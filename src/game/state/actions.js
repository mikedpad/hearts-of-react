import Player from '../player';

function newGame() {
  return { type: `NEW_GAME` };
}

function startGame() {
  return { type: `START_GAME` };
}

function nextRound() {
  return { type: `NEXT_ROUND` };
}

function gameOver() {
  return { type: `GAME_OVER` };
}

function addPlayer(name) {
  return {
    type: `ADD_PLAYER`,
    payload: new Player(name),
  };
}

function removePlayer(id) {
  return {
    type: `REMOVE_PLAYER`,
    payload: id,
  };
}

export default {
  newGame,
  startGame,
  nextRound,
  gameOver,
  addPlayer,
  removePlayer,
};
