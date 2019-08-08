import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    type: `light`,
    primary: {
      main: `#19A13C`,
      dark: `#0C7F2A`,
      light: `#39AC57`,
      contrastText: `#fff`,
    },
    secondary: {
      main: `#187085`,
      dark: `#0D5869`,
      light: `#327D8E`,
      contrastText: `#fff`,
    },
    error: {
      main: `#830F00`,
      contrastText: `#fff`,
    },
    divider: `#FF8B7B`,
    background: {
      paper: `#eee`,
      default: `#D73621`,
    },
  },
  typography: {
    fontFamily: `'Avenir Next', Roboto, 'Helvetica Neue', Arial, sans-serif`,
    htmlFontSize: 16,
  },
  overrides: {
    MuiButton: {
      root: {
        // backgroundColor: `limegreen`,
        color: `white`,
        fontWeight: `bold`,
        margin: `1em`,
        // '&:hover': {
        //   backgroundColor: `mediumseagreen`,
        // },
      },
    },
    MuiLink: {
      root: {
        textDecoration: `none`,
        '&:hover': {
          textDecoration: `none`,
        },
      },
    },
  },
});
