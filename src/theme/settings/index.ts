import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff933b',
    },
    secondary: {
      main: '#ce93d8',
    },
    background: {
      default: '#0d0d0d',
      paper: '#0d0d0d',
    },
    divider: 'rgba(238,228,227,0.15)',
    text: {
      primary: '#ffffff',
      secondary: '#c9c9d1',
    },
  },
  typography: {
    fontSize: 16,
  },
});

export default muiTheme;
