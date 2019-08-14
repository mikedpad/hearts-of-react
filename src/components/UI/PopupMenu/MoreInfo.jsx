import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, IconButton, Fade, MenuItem } from '@material-ui/core';
import MoreInfoIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/styles';
import { usePlayers } from '../../hooks/usePlayers';

const useStyles = makeStyles(() => ({
  noEvents: {
    pointerEvents: `none`,
  },
}));

const MoreInfo = ({ id, name, score }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMoreInfoOpen = Boolean(anchorEl);
  const { removePlayer } = usePlayers();
  const { noEvents } = useStyles({ score });

  const handleMoreInfo = evt => setAnchorEl(evt.currentTarget);
  const handleCloseMoreInfo = () => setAnchorEl(null);
  const handleRemovePlayer = () => removePlayer(id);

  return (
    <>
      <IconButton
        onClick={handleMoreInfo}
        classes={{
          label: noEvents,
        }}
        aria-controls={`fade-menu-${id}`}
        aria-haspopup="true"
        data-id={id}
        data-name={name}
      >
        <MoreInfoIcon />
      </IconButton>
      <Menu
        id={`fade-menu-${id}`}
        color="primary"
        anchorEl={anchorEl}
        keepMounted
        open={isMoreInfoOpen}
        onClose={handleCloseMoreInfo}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleRemovePlayer}>Remove</MenuItem>
      </Menu>
    </>
  );
};

export default MoreInfo;

MoreInfo.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};
