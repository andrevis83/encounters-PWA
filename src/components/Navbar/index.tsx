import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { FaUsers } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import { GiMonsterGrasp, GiSwordClash } from 'react-icons/gi';
import { useNavbar } from './hooks/useNavbar';
import { bottomNavigationAction, bottomPaper } from './styles';

function Navbar(): React.ReactElement {
  const { currentRoute, users, handleChange } = useNavbar();

  return (
    <Paper sx={bottomPaper} elevation={3}>
      <BottomNavigation
        showLabels
        value={currentRoute}
        onChange={(_, newValue: string) => handleChange(newValue)}
        sx={{
          background: '#171717',
        }}
      >
        <BottomNavigationAction disableRipple label="Home" icon={<MdHome />} value={'/'} sx={bottomNavigationAction} />
        <BottomNavigationAction
          disabled={users?.length === 0}
          disableRipple
          label="Personaggi"
          icon={<FaUsers />}
          value={'/characters'}
          sx={bottomNavigationAction}
        />
        <BottomNavigationAction
          disabled={users?.length === 0}
          disableRipple
          label="Mostri"
          icon={<GiMonsterGrasp />}
          value={'/monsters'}
          sx={bottomNavigationAction}
        />
        <BottomNavigationAction
          disabled={users?.length === 0}
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
