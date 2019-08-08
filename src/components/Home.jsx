import React from 'react';
import { Helmet } from 'react-helmet';
import { Typography, Box, makeStyles, Zoom } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import TextLink from './UI/TextLink';
import ButtonLink from './UI/ButtonLink';

const useStyles = makeStyles(theme => ({
  newGameButton: {
    marginTop: theme.spacing(2),
  },
  icon: {
    marginLeft: theme.spacing(1),
  },
}));

const HeroBox = styled(Box)({
  display: `flex`,
  flexFlow: `column nowrap`,
  justifyContent: `center`,
  alignItems: `center`,
  height: `100vh`,
  width: `100vw`,
});

const TitleLink = styled(TextLink)({
  color: `#fff`,
  marginBottom: `1rem`,
  fontWeight: `normal`,
});

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>React Hearts</title>
      </Helmet>
      <main>
        <HeroBox>
          <Zoom in style={{ transitionDelay: `250ms` }}>
            <Typography variant="h1" display="block">
              <TitleLink to="/">React Hearts</TitleLink>
            </Typography>
          </Zoom>
          <Zoom in style={{ transitionDelay: `500ms` }}>
            <ButtonLink
              to="/game"
              size="large"
              variant="contained"
              color="primary"
              className={classes.newGameButton}
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
