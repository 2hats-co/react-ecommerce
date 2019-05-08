import { createMuiTheme } from '@material-ui/core/styles';
import { pink, amber } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: amber,
  },

  typography: {
    fontFamily: ['system-ui', 'sans-serif'].join(','),
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 800 },
    button: { fontWeight: 800 },
  },

  shape: { borderRadius: 10 },

  overrides: {
    MuiButton: {
      label: {
        '& > svg': { marginLeft: 8 },
      },
    },
    MuiFab: {
      label: {
        '& > svg': { marginLeft: 8 },
      },
    },
  },
});

export default theme;
