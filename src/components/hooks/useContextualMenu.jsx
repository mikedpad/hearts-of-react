import React, { useReducer, useContext, useMemo, createContext } from 'react';

const ContextualMenuContext = createContext();

const initialState = {
  isOpen: false,
  anchor: null,
  id: null,
  name: null,
};

const menuReducer = (state, action) => {
  switch (action.type) {
    case `OPEN`:
      return {
        ...action.payload,
        isOpen: true,
      };
    case `CLOSE`:
      return initialState;
    default:
      throw new Error();
  }
};

const useContextualMenu = () => {
  const context = useContext(ContextualMenuContext);
  if (!context) {
    throw new Error(`useContextualMenu must be used within a ContextualMenuProvider`);
  }

  const [state, dispatch] = context;

  const openMenu = evt => {
    const anchor = evt.currentTarget;
    const { id, name } = evt.currentTarget.dataset;
    dispatch({ type: `OPEN`, payload: { anchor, id, name } });
  };

  const closeMenu = () => {
    dispatch({ type: `CLOSE` });
  };

  return {
    isMenuOpen: () => state.isOpen,
    getAnchor: () => state.anchor,
    getID: () => state.id,
    openMenu,
    closeMenu,
  };
};

function ContextualMenuProvider(props) {
  const [state, dispatch] = useReducer(menuReducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);
  return <ContextualMenuContext.Provider value={value} {...props} />;
}

export { ContextualMenuProvider, useContextualMenu };