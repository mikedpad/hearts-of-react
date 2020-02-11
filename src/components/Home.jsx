import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import ButtonLink from './UI/ButtonLink';
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
  const { hero, title } = useStyles();

  return (
    <>
      <Helmet>
        <title>React Hearts</title>
      </Helmet>
      <main>
        <Container className={hero}>
          <Zoom in style={{ transitionDelay: `250ms` }}>
            <Typography variant="h1" className={title}>
              React Hearts
            </Typography>
          </Zoom>
          <Zoom in style={{ transitionDelay: `500ms` }}>
            <ButtonLink
              to={isInProgress ? `/game/play` : `/game/new`}
              color={isInProgress ? `primary` : `secondary`}
              variant="contained"
              size="large"
            >
              {isInProgress ? `Resume Game` : `Create Game`}
            </ButtonLink>
          </Zoom>
        </Container>
      </main>
    </>
  );
};

export default Home;
