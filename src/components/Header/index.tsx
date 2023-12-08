import AppBar from '@mui/material/AppBar';
import { GiBookmarklet } from 'react-icons/gi';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { appBar, box } from './styles';
import { Box } from '@mui/material';

function Header() {
  return (
    <AppBar position="fixed" sx={appBar}>
      <Toolbar>
        <Box sx={box}>
          <GiBookmarklet />
        </Box>
        <Typography variant="h1" color={'#fff'} fontSize={18} letterSpacing={0.75} ml={1}>
          Encounters
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
