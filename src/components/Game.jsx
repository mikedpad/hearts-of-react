import React from 'react';
import { AppBar, Toolbar, Drawer, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';
import { PlayerProvider } from './hooks/usePlayers';
import SideMenu from './UI/SideMenu';
import ToolbarMenu from './UI/ToolbarMenu';

const useStyles = makeStyles(() => ({
  box: {
    display: `block`,
  },
  shim: {
    pointerEvents: `none`,
  },
}));

const Game = ({ children }) => {
  const { shim, box } = useStyles();
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const openDrawer = () => setMenuOpen(true);
  const closeDrawer = () => setMenuOpen(false);

  return (
    <>
      <SnackbarProvider maxSnack={3} autoHideDuration={3000} preventDuplicate>
        <PlayerProvider>
          <AppBar color="primary">
            <ToolbarMenu extended onMenuClick={openDrawer} />
          </AppBar>
          <Toolbar className={shim} />
          <Drawer open={isMenuOpen} onClose={closeDrawer}>
            <SideMenu closeDrawer={closeDrawer} />
          </Drawer>
          <Box className={box}>{children}</Box>
        </PlayerProvider>
      </SnackbarProvider>
    </>
  );
};

export default Game;
