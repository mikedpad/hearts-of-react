import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/styles';
import MoreInfoIcon from '@material-ui/icons/MoreVert';
import { useContextualMenu } from '../../../hooks/useContextualMenu';
import { getScoreColor } from '../../../../game/util';

const useStyles = makeStyles(theme => ({
  li: {
    width: `auto`,
    padding: 0,
    alignItems: `center`,
    flexFlow: `row nowrap`,
  },
  liName: {
    flex: `1 1 auto`,
    margin: theme.spacing(1.5, 1),
  },
  liScore: {
    color: ({ score }) => getScoreColor(score),
    flex: `0 1 auto`,
    margin: theme.spacing(0, 1.5),
  },
  liMenu: {
    flex: `0 1 auto`,
    minWidth: `0`,
  },
}));

const PlayerEntry = ({ id, name, score }) => {
  const { openMenu } = useContextualMenu();
  const { li, liName, liScore, liMenu } = useStyles({ score });

  return (
    <ListItem key={id} className={li}>
      <ListItemText className={liName} primary={name} />
      <ListItemText className={liScore} primary={score} />
      <ListItemIcon className={liMenu}>
        <IconButton
          onClick={openMenu}
          data-id={id}
          aria-controls="contextual-menu"
          aria-haspopup="true"
        >
          <MoreInfoIcon />
        </IconButton>
      </ListItemIcon>
    </ListItem>
  );
};

export default PlayerEntry;

PlayerEntry.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};
