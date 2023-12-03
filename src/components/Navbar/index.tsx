import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { FaUsers } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import { GiMonsterGrasp, GiSwordClash } from 'react-icons/gi';
import { useNavbar } from './hooks/useNavbar';
import { bottomNavigationAction } from './styles/bottomNavigationAction';

function Navbar(): React.ReactElement {
  const { currentRoute, handleChange } = useNavbar();

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={currentRoute}
        onChange={(_, newValue: string) => handleChange(newValue)}
        sx={{
          background: '#171717',
        }}
      >
        <BottomNavigationAction
          disableRipple
          label="Home"
          icon={<MdHome />}
          value={'/'}
          sx={bottomNavigationAction}
        />
        <BottomNavigationAction
          disableRipple
          label="Personaggi"
          icon={<FaUsers />}
          value={'/characters'}
          sx={bottomNavigationAction}
        />
        <BottomNavigationAction
          disableRipple
          label="Mostri"
          icon={<GiMonsterGrasp />}
          value={'/monsters'}
          sx={bottomNavigationAction}
        />
        <BottomNavigationAction
          disableRipple
          label="Scontri"
          icon={<GiSwordClash />}
          value={'/encounters'}
          sx={bottomNavigationAction}
        />
      </BottomNavigation>
    </Paper>
  );
}

export default Navbar;
