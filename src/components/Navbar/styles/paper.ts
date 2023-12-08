import type { SxProps, Theme } from '@mui/material';

export const bottomPaper: SxProps<Theme> | undefined = {
  position: 'fixed',
  bottom: (theme) => theme.spacing(3),
  left: (theme) => theme.spacing(1),
  right: (theme) => theme.spacing(1),
  backgroundImage: 'none',
  boxShadow: 'none',
  '& .MuiBottomNavigation-root': {
    borderRadius: (theme) => theme.spacing(4),
  },
};
