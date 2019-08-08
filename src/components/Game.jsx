import React from 'react';
import { AppBar, Toolbar, Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { PlayerProvider } from './hooks/usePlayers';
import SideMenu from './UI/SideMenu';
import ToolbarMenu from './UI/ToolbarMenu';

const useStyles = makeStyles(() => ({
  shimToolbar: {
    pointerEvents: `none`,
  },
}));

const Game = ({ children }) => {
  const classes = useStyles();
  const [drawerState, setOpenDrawer] = React.useState(false);
  const openDrawer = () => setOpenDrawer(true);
  const closeDrawer = () => setOpenDrawer(false);

  return (
    <>
      <PlayerProvider>
        <AppBar color="secondary">
          <ToolbarMenu onMenuClick={openDrawer} />
        </AppBar>
        <Toolbar className={classes.shimToolbar} />
        <Drawer open={drawerState} onClose={closeDrawer}>
          <SideMenu closeDrawer={closeDrawer} />
        </Drawer>
        <main>{children}</main>
      </PlayerProvider>
    </>
  );
};

export default Game;
