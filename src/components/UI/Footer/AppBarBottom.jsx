import React from 'react';
// import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  bottomBar: {
    bottom: 0,
    top: `auto`,
  },
}));

const AppBarBottom = ({ children }) => {
  const { bottomBar } = useStyles();

  return (
    <AppBar component="footer" position="sticky" color="inherit" className={bottomBar}>
      <Container maxWidth="xs">
        <Toolbar disableGutters>
          {/* {label && (
            <Typography variant="h1" className={labelStyle}>
              {label}
            </Typography>
          )} */}
          {children}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarBottom;

// AppBarBottom.propTypes = {
//   label: PropTypes.string,
// };

// AppBarBottom.defaultProps = {
//   label: null,
// };
