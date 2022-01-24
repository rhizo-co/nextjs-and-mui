import { green, purple, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
// Check out https://material.io/resources/color/ for help creating your own pallette

// Theme ideas
// change buttons to not be all caps
// change font to something else
// get rid of shadows ?
// add an accent color

export const themeProvider = ({ darkMode }: {darkMode: boolean}) => createTheme({
  typography: {
    fontFamily: [
      'Courier',
      '"Courier New"',
      'monospace',
      'sans-serif',
    ].join(','),
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    mode: darkMode ? 'dark' : 'light',
    primary: {
      main: purple.A100,
    },
    secondary: {
      main: green.A200,
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true
      }
    },
  },
});
