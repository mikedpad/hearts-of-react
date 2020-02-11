/* eslint-disable import/prefer-default-export */
import theme from '../styles/theme';

export function getScoreColor(score) {
  const warningColor = score > 75 ? theme.palette.score.high : theme.palette.score.medium;
  return score > 50 ? warningColor : theme.palette.score.low;
}
