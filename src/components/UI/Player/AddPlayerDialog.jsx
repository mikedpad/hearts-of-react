import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useGameState } from '../../hooks/useGameState';
import useTextFieldValidator from '../../hooks/useTextFieldValidator';

const AddPlayerDialog = ({ isOpen, handleClose }) => {
  const { addPlayer, listOfPlayers } = useGameState();
  const { hasError, errorMsg, isBlank, isInvalid, isDuplicate } = useTextFieldValidator();

  function handleAddButton() {
    // Get the provided name
    const name = document.querySelector(`#player-name`).value.trim();

    // Check if the name is not an empty string (blank)
    if (isBlank(name)) return;
    // Check if the name consists of valid characters
    const regex = /^[a-zA-Z0-9 _-]+$/;
    if (isInvalid(name, regex, <span>Invalid characters detected</span>)) return;
    // Checks if the name already exists
    if (isDuplicate(name, listOfPlayers)) return;

    addPlayer(name);
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
        <DialogContentText>Enter a name:</DialogContentText>
        <TextField
          error={hasError}
          helperText={errorMsg}
          onKeyPress={handleKeyPress}
          label="Player Name"
          id="player-name"
          autoFocus
          fullWidth
          margin="normal"
          type="text"
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
