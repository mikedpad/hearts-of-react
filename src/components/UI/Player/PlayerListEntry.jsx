import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, ListItemIcon, Fade, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import MoreInfoIcon from '@material-ui/icons/MoreVert';
import { useContextualMenu } from '../../hooks/useContextualMenu';

const getScore = score => {
  const warningColor = score > 75 ? `#ff0044` : `#ffdf00`;
  return score > 50 ? warningColor : `#45c309`;
};

const useStyles = makeStyles(theme => ({
  liPaper: {
    margin: theme.spacing(2, 0),
    width: `auto`,
    padding: 0,
    alignItems: `center`,
    flexFlow: `row nowrap`,
  },
  liText: {
    fontSize: `1rem`,
  },
  liName: {
    flex: `1 1 auto`,
    margin: theme.spacing(0, 1, 0, 2),
  },
  liScore: {
    color: ({ score }) => getScore(score),
    flex: `0 1 auto`,
    margin: theme.spacing(0, 1),
  },
  liMoreInfo: {
    flex: `0 1 auto`,
    minWidth: `0`,
  },
  noEvents: {
    pointerEvents: `none`,
  },
}));

const PlayerListEntry = ({ id, name, score }) => {
  const { openMenu } = useContextualMenu();
  const { liPaper, liText, liName, liScore, liMoreInfo, noEvents } = useStyles({ score });

  return (
    <Fade in>
      <ListItem key={id} className={liPaper}>
        <ListItemText className={liName} primary={name} classes={{ primary: liText }} />
        <ListItemText className={liScore} primary={score} classes={{ primary: liText }} />
        <ListItemIcon className={liMoreInfo}>
          <IconButton
            onClick={openMenu}
            classes={{
              label: noEvents,
            }}
            aria-controls="contextual-menu"
            aria-haspopup="true"
            data-id={id}
            data-name={name}
          >
            <MoreInfoIcon />
          </IconButton>
        </ListItemIcon>
      </ListItem>
    </Fade>
  );
};

export default PlayerListEntry;

PlayerListEntry.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};
