import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    type: `light`,
    primary: {
      main: `#36A1F4`,
      light: `#8BC9F8`,
      dark: `#047CD8`,
      contrastText: `#FFF`,
    },
    secondary: {
      main: `#FCB448`,
      light: `#FFc46B`,
      dark: `#ED991C`,
      contrastText: `#FFF`,
    },
    error: {
      main: `#CD1717`,
      light: `E93D3D`,
      dark: `A20707`,
      contrastText: `#fff`,
    },
    divider: `rgba(255, 255, 255, 0.33)`,
    background: {
      paper: `#eee`,
      default: `#CD1717`,
    },
  },
  typography: {
    fontFamily: `'Avenir Next', Roboto, 'Helvetica Neue', Arial, sans-serif`,
    htmlFontSize: 16,
  },
  // overrides: {
  //   MuiButton: {
  //     root: {
  //       backgroundColor: `limegreen`,
  //       color: `white`,
  //       fontWeight: `bold`,
  //       margin: `1em`,
  //       '&:hover': {
  //         backgroundColor: `mediumseagreen`,
  //       },
  //     },
  //   },
  // },
});
