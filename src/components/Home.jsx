import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import { navigate } from '@reach/router';
import { useGameState } from './hooks/useGameState';

const useStyles = makeStyles(theme => ({
  hero: {
    display: `flex`,
    flexFlow: `column nowrap`,
    justifyContent: `space-around`,
    alignItems: `center`,
    height: `100vh`,
  },
  title: {
    fontFamily: theme.typography.headline,
    fontSize: `5rem`,
    margin: theme.spacing(1.5, 0),
    textTransform: `uppercase`,
    textAlign: `center`,
  },
}));

const Home = () => {
  const { isInProgress } = useGameState();
  const classes = useStyles();
  const handleButtonClick = async () => {
    await navigate(isInProgress ? `/game/play` : `/game/new`);
  };

  return (
    <>
      <Helmet>
        <title>React Hearts</title>
      </Helmet>
      <main>
        <Container className={classes.hero}>
          <Zoom in style={{ transitionDelay: `250ms` }}>
            <Typography variant="h1" className={classes.title}>
              React Hearts
            </Typography>
          </Zoom>
          <Zoom in style={{ transitionDelay: `500ms` }}>
            <Button onClick={handleButtonClick} color="secondary" variant="contained" size="large">
              {isInProgress ? `Resume Game` : `Create Game`}
            </Button>
          </Zoom>
        </Container>
      </main>
    </>
  );
};

export default Home;
