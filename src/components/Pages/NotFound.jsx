import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LinkOffIcon from '@material-ui/icons/LinkOff';
import { makeStyles } from '@material-ui/styles';
import { Fade } from '@material-ui/core';
import AppBarTop from '../UI/Header/AppBarTop';

const useStyles = makeStyles(theme => ({
  container: {
    display: `flex`,
    flexFlow: `column nowrap`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  icon: {
    fontSize: `10rem`,
    margin: theme.spacing(4),
  },
  err404: {
    // margin: theme.spacing(2, 0),
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
  const { container, icon, err404, notFound, url } = useStyles();

  return (
    <>
      <Helmet>
        <title>React Hearts: Error 404 - Invalid URL</title>
      </Helmet>
      <AppBarTop label="React Hearts" />
      <main>
        <Container maxWidth="xs" className={container}>
          <LinkOffIcon className={icon} />
          <Typography variant="h3" className={err404}>
            Error 404
          </Typography>

          <Fade in timeout={1000} style={{ transitionDelay: `500ms` }}>
            <Typography variant="h4" className={notFound}>
              Invalid URL
            </Typography>
          </Fade>
          <Fade in timeout={1000} style={{ transitionDelay: `1000ms` }}>
            {location && (
              <Typography variant="body2" className={url}>
                [ {href} ]
              </Typography>
            )}
          </Fade>
        </Container>
      </main>
    </>
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
