import { green, purple, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
// Check out https://material.io/resources/color/ for help creating your own pallette
export const theme = createTheme({
  palette: {
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
});
