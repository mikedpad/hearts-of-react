import React from 'react';
import { navigate } from '@reach/router';
import { useGameState } from '../hooks/useGameState';
import GamePlayerList from '../UI/Player/List/GamePlayerList';
import BaseLayout from '../UI/Layout/BaseLayout';

const PlayGame = () => {
  const { players, isInProgress, round } = useGameState();

  if (!isInProgress) {
    navigate(`/game/new`);
  }

  const title = isInProgress ? `Round ${round}` : `No Game In Progress`;
  return <BaseLayout title={title}>{players && <GamePlayerList />}</BaseLayout>;
};

export default PlayGame;
