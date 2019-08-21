import React from 'react';
import { AppBar, Toolbar, Drawer, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { PlayerProvider } from './hooks/usePlayers';
import SideMenu from './UI/Menu/SideMenu';
import ToolbarHeader from './UI/App/ToolbarHeader';

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
    <PlayerProvider>
      <AppBar color="primary">
        <ToolbarHeader extended onMenuClick={openDrawer} />
      </AppBar>
      <Toolbar className={shim} />
      <Drawer open={isMenuOpen} onClose={closeDrawer}>
        <SideMenu closeDrawer={closeDrawer} />
      </Drawer>
      <Box className={box}>{children}</Box>
    </PlayerProvider>
  );
};

export default Game;
