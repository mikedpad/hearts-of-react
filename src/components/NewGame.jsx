/* eslint-disable no-console */
import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { TimelineLite, Power2 } from 'gsap';
import { navigate } from '@reach/router';
import { fg, headerBg, button } from '../styles/colors';

const Section = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
`;

const Header = styled.header`
  align-items: center;
  background-color: ${headerBg};
  display: flex;
  justify-content: space-between;
  opacity: 0;
  padding: 1rem;
`;

const Title = styled.h1`
  color: ${fg};
  display: inline-block;
  font-size: 2rem;
  margin: 0;
  text-align: center;
`;

const Button = styled.button`
  background-color: ${button};
  border: 0 none;
  border-radius: 0.25em;
  color: ${fg};
  display: inline-block;
  font-size: 1rem;
  margin: 0;
  outline: none;
  padding: 0.25em 0.5em;
  text-align: center;
`;

const NewGame = () => {
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const mainMenuButtonRef = useRef(null);

  useEffect(() => {
    const tl = new TimelineLite();
    tl.delay(0.5);
    tl.to(headerRef.current, 0.5, { autoAlpha: 1, ease: Power2.easeOut });
    tl.from(titleRef.current, 0.5, { autoAlpha: 0, x: -100, ease: Power2.easeOut }, 0.25);
    tl.from(mainMenuButtonRef.current, 0.5, { autoAlpha: 0, x: 100, ease: Power2.easeOut }, 0.25);

    const goToMainMenu = () => {
      console.log(`Going Back To Main Menu...`);
      tl.reverse();
      tl.eventCallback(`onReverseComplete`, navigate, [`/`]);
    };

    mainMenuButtonRef.current.addEventListener(`click`, goToMainMenu);

    return () => {
      mainMenuButtonRef.current.removeEventListener(`click`, goToMainMenu);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>React Hearts: New Game</title>
      </Helmet>
      <Section>
        <Header ref={headerRef}>
          <Title ref={titleRef}>React Hearts</Title>
          <Button ref={mainMenuButtonRef}>Main Menu</Button>
        </Header>
      </Section>
    </>
  );
};

export default NewGame;
