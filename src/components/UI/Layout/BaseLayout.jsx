import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  header: {
    fontFamily: theme.typography.headline,
    fontSize: `2.5rem`,
    margin: theme.spacing(1.5, 0),
    textTransform: `uppercase`,
    textAlign: `center`,
  },
  footer: {
    bottom: 0,
    top: `auto`,
  },
  title: {
    fontSize: `1.75rem`,
    margin: theme.spacing(1.5, 0),
  },
  list: {
    display: `flex`,
    flexFlow: `column nowrap`,
  },
  subheader: {
    alignItems: `center`,
    display: `flex`,
    justifyContent: `space-between`,
    textTransform: `uppercase`,
    lineHeight: `normal`,
    borderBottom: `1px solid ${theme.palette.list.headerBorder}`,
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.list.header,
  },
  name: {
    fontSize: `0.75rem`,
    margin: theme.spacing(1.5, 1),
  },
  score: {
    fontSize: `0.75rem`,
    margin: theme.spacing(1.5, 6, 1.5, 1),
  },
}));

const BaseLayout = ({ children, title, footer }) => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>React Hearts: {title}</title>
      </Helmet>
      <AppBar position="sticky" color="secondary">
        <Container maxWidth="xs">
          <Toolbar disableGutters>
            <Typography variant="h1" className={classes.header}>
              React Hearts
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Container maxWidth="xs">
          <Fade in style={{ transitionDelay: `250ms` }}>
            <Typography variant="h2" align="center" className={classes.title}>
              {title}
            </Typography>
          </Fade>
          <Fade in style={{ transitionDelay: `500ms` }}>
            <>{children}</>
          </Fade>
        </Container>
      </main>
      <AppBar component="footer" position="sticky" color="inherit" className={classes.footer}>
        <Container maxWidth="xs">
          <Toolbar disableGutters>{footer}</Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default BaseLayout;

BaseLayout.propTypes = {
  title: PropTypes.string.isRequired,
  footer: PropTypes.element,
};

BaseLayout.defaultProps = {
  footer: null,
};
