import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { useGameState } from '../../hooks/useGameState';

const AddPlayerDialog = ({ isOpen, handleClose }) => {
  const { addPlayer } = useGameState();

  function handleAddButton() {
    const el = document.querySelector(`#player-name`);
    addPlayer(el.value);
    handleClose();
  }

  function handleKeyPress(evt) {
    if (evt.key === `Enter`) {
      handleAddButton();
    }
  }

  return (
    <Dialog open={isOpen} onClose={handleClose} aria-labelledby="add-player-dialog-title">
      <DialogTitle id="add-player-dialog-title">Add Player</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="player-name"
          label="Player Name"
          type="text"
          fullWidth
          onKeyPress={handleKeyPress}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAddButton} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddPlayerDialog;

AddPlayerDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
