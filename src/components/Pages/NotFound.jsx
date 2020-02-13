import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import LinkOffIcon from '@material-ui/icons/LinkOff';
import { makeStyles } from '@material-ui/styles';
import Fade from '@material-ui/core/Fade';
import BaseLayout from '../UI/Layout/BaseLayout';

const useStyles = makeStyles(theme => ({
  icon: {
    fontSize: `10rem`,
    margin: theme.spacing(4),
  },
  err404: {
    fontWeight: `bold`,
  },
  notFound: {
    margin: theme.spacing(2, 0),
  },
  url: {
    margin: theme.spacing(1, 0),
  },
}));

const NotFound = ({ location }) => {
  const { href } = location;
  const classes = useStyles();

  return (
    <BaseLayout title="Error 404 - Invalid URL">
      <LinkOffIcon className={classes.icon} />
      <Typography variant="h3" className={classes.err404}>
        Error 404
      </Typography>

      <Fade in timeout={1000} style={{ transitionDelay: `500ms` }}>
        <Typography variant="h4" className={classes.notFound}>
          Invalid URL
        </Typography>
      </Fade>
      <Fade in timeout={1000} style={{ transitionDelay: `1000ms` }}>
        {location && (
          <Typography variant="body2" className={classes.url}>
            [ {href} ]
          </Typography>
        )}
      </Fade>
    </BaseLayout>
  );
};

export default NotFound;

NotFound.propTypes = {
  location: PropTypes.shape({
    href: PropTypes.string,
  }),
};

NotFound.defaultProps = {
  location: null,
};
