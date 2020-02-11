import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: `1.75rem`,
    margin: theme.spacing(1.5, 6, 1.5, 1),
  },
}));

const PageTitle = ({ label }) => {
  const { title } = useStyles();

  return (
    <Typography variant="h2" className={title}>
      {label}
    </Typography>
  );
};

export default PageTitle;

PageTitle.propTypes = {
  label: PropTypes.string.isRequired,
};
