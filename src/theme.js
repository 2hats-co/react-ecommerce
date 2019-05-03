import { createMuiTheme } from '@material-ui/core/styles';
import { pink, amber } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: amber,
  },

  typography: { fontFamily: ['system-ui', 'sans-serif'].join(',') },

  shape: { borderRadius: 10 },

  overrides: {
    MuiButton: {
      label: {
        '& > svg': { marginLeft: 8 },
      },
    },
  },
});

export default theme;
