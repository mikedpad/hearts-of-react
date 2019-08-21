import React from 'react';
import PropTypes from 'prop-types';
import { Menu, MenuItem } from '@material-ui/core';
import { useContextualMenu } from '../../hooks/useContextualMenu';

const ContextualMenu = ({ menuItems }) => {
  const { getAnchor, isMenuOpen, getID, closeMenu } = useContextualMenu();
  const anchorEl = getAnchor();
  const isOpen = isMenuOpen();

  return (
    <Menu
      id="contextual-menu"
      color="primary"
      anchorEl={anchorEl}
      keepMounted
      open={isOpen}
      onClose={closeMenu}
    >
      {menuItems.map(({ label, onClickFunc }) => {
        const onClick = () => {
          onClickFunc(getID());
          closeMenu();
        };

        return (
          <MenuItem key={label} onClick={onClick}>
            {label}
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default ContextualMenu;

ContextualMenu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClickFunc: PropTypes.func.isRequired,
    }),
  ).isRequired,
};
