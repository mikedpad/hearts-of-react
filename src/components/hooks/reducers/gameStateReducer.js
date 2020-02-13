export const defaultState = {
  isInProgress: false,
  round: null,
  players: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case `NEW_GAME`:
      return {
        ...state,
        isInProgress: false,
        players: [],
      };
    case `START_GAME`:
      return {
        ...state,
        isInProgress: true,
        round: 1,
      };
    case `NEXT_ROUND`:
      return {
        ...state,
        round: state.round + 1,
      };
    case `GAME_OVER`:
      return {
        ...state,
        isInProgress: false,
      };
    case `ADD_PLAYER`:
      return {
        ...state,
        players: [...state.players, action.payload],
      };
    case `REMOVE_PLAYER`:
      return {
        ...state,
        players: state.players.filter(({ id }) => id !== action.payload),
      };
    default:
      throw new Error();
  }
};

export default reducer;
