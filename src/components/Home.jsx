import React from 'react';
import { Helmet } from 'react-helmet';
import { Typography, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import TextLink from './UI/TextLink';
import ButtonLink from './UI/ButtonLink';
import HeroBox from './UI/HeroBox';

const useStyles = makeStyles(theme => ({
  newGameButton: {
    marginTop: theme.spacing(2),
  },
  title: {
    display: `block`,
    textAlign: `center`,
    marginBottom: theme.spacing(2),
  },
  titleLink: {
    color: `#fff`,
    textDecoration: `none`,
  },
}));

const Home = () => {
  const { titleLink, newGameButton, title } = useStyles();

  return (
    <>
      <Helmet>
        <title>React Hearts</title>
      </Helmet>
      <main>
        <HeroBox>
          <Zoom in style={{ transitionDelay: `250ms` }}>
            <Typography variant="h1" className={title}>
              <TextLink to="/" className={titleLink}>
                React Hearts
              </TextLink>
            </Typography>
          </Zoom>
          <Zoom in style={{ transitionDelay: `500ms` }}>
            <ButtonLink
              to="/game"
              size="large"
              variant="contained"
              color="primary"
              className={newGameButton}
            >
              New Game
            </ButtonLink>
          </Zoom>
        </HeroBox>
      </main>
    </>
  );
};

export default Home;
