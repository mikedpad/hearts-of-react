import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, ListItemIcon, Fade, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import MoreInfo from '../PopupMenu/MoreInfo';

const getScore = score => {
  const warningColor = score > 75 ? `#ff0044` : `#ffdf00`;
  return score > 50 ? warningColor : `#45c309`;
};

const useStyles = makeStyles(theme => ({
  playerPaper: {
    margin: theme.spacing(2),
  },
  subheader: {
    color: `#ffffff99`,
    textTransform: `uppercase`,
    lineHeight: `normal`,
    padding: theme.spacing(0, 2, 1),
  },
  liName: {
    flex: `1 1 auto`,
    margin: theme.spacing(0, 1, 0, 2),
    fontSize: `1rem`,
  },
  liScore: {
    color: ({ score }) => getScore(score),
    flex: `0 1 auto`,
    margin: theme.spacing(0, 1),
    fontSize: `1.25rem`,
    textShadow: `#00000099 1px 1px 2px`,
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
  const { playerPaper, liName, liScore, liMoreInfo } = useStyles({ score });

  return (
    <Fade in>
      <Paper className={playerPaper}>
        <ListItem key={id} disableGutters>
          <ListItemText className={liName} primary={name} disableTypography />
          <ListItemText className={liScore} primary={score} disableTypography />
          <ListItemIcon className={liMoreInfo}>
            <MoreInfo id={id} name={name} score={score} />
          </ListItemIcon>
        </ListItem>
      </Paper>
    </Fade>
  );
};

export default PlayerListEntry;

PlayerListEntry.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};
