import * as React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import muiTheme from './settings';

const EncountersTheme: React.FC<EncountersProps> = (props) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};

export default EncountersTheme;
