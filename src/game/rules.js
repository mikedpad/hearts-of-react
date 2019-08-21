export const minPlayers = 3;
export const maxPlayers = 7;

export function hasMinimumPlayers(numOfPlayers) {
  return numOfPlayers >= minPlayers;
}

export function canAddPlayers(numOfPlayers) {
  return numOfPlayers < maxPlayers;
}

export function isMaxPlayers(numOfPlayers) {
  return numOfPlayers === maxPlayers;
}

export function readyToPlay(numOfPlayers) {
  return hasMinimumPlayers(numOfPlayers) && numOfPlayers <= maxPlayers;
}

export function doesPlayerExist(playerName, listOfPlayers) {
  const playerArray = listOfPlayers.filter(({ name }) => name === playerName);
  return playerArray.length > 0;
}
