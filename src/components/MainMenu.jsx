/* eslint-disable no-console */
import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { TimelineLite, Power2 } from 'gsap';
import { navigate } from '@reach/router';
import { fg, button } from '../styles/colors';

const Section = styled.section`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const Title = styled.h1`
  color: ${fg};
  display: inline-block;
  font-size: 10vw;
  margin: 0;
  opacity: 0;
  text-align: center;
`;

const Button = styled.button`
  background-color: ${button};
  border: 0 none;
  border-radius: 0.25em;
  color: ${fg};
  display: inline-block;
  font-size: 2vw;
  margin: 1em 0;
  opacity: 0;
  outline: none;
  padding: 0.25em 0.5em;
  text-align: center;
`;

const MainMenu = () => {
  const titleRef = useRef(null);
  const newGameButtonRef = useRef(null);

  useEffect(() => {
    const tl = new TimelineLite();
    tl.delay(0.5);
    tl.to(titleRef.current, 0.5, { autoAlpha: 1, ease: Power2.easeOut });
    tl.to(newGameButtonRef.current, 0.5, { autoAlpha: 1, ease: Power2.easeOut });

    const newGame = () => {
      console.log(`Starting New Game...`);
      tl.to(titleRef.current, 0.5, { autoAlpha: 0, ease: Power2.easeOut });
      tl.to(newGameButtonRef.current, 0.5, { autoAlpha: 0, ease: Power2.easeOut }, 0);
      tl.call(navigate, [`/new`]);
    };

    newGameButtonRef.current.addEventListener(`click`, newGame);

    return () => {
      newGameButtonRef.current.removeEventListener(`click`, newGame);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>React Hearts: A score keeper built with React</title>
      </Helmet>
      <Section>
        <Title ref={titleRef}>React Hearts</Title>
        <Button ref={newGameButtonRef}>New Game</Button>
      </Section>
    </>
  );
};

export default MainMenu;
