import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  btnDiv: {
    display: `flex`,
    flexFlow: `column nowrap`,
    justifyContent: `center`,
    alignItems: `center`,
    margin: theme.spacing(0, 1),
  },
  btn: {
    padding: theme.spacing(1.5),
    minWidth: 0,
  },
  btnLabel: {
    fontSize: `0.75rem`,
    textAlign: `center`,
    userSelect: `none`,
  },
}));

const RoundIconButton = ({ label, onClick, Icon }) => {
  const { btnDiv, btn, btnLabel } = useStyles();
  return (
    <div className={btnDiv}>
      <IconButton onClick={onClick} className={btn}>
        <Icon />
      </IconButton>
      {label && (
        <Typography variant="body2" className={btnLabel}>
          {label}
        </Typography>
      )}
    </div>
  );
};

export default RoundIconButton;

RoundIconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  Icon: PropTypes.elementType.isRequired,
  label: PropTypes.string,
};

RoundIconButton.defaultProps = {
  label: null,
};
