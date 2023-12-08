import type { SxProps, Theme } from '@mui/material';

export const bottomNavigationAction: SxProps<Theme> | undefined = {
  fontSize: {
    xs: 24,
  },
  gap: {
    xs: 0.5,
  },
  '& .MuiBottomNavigationAction-label': {
    fontSize: {
      xs: 12,
      md: 14,
      letterSpacing: 0.5,
    },
  },
  '& .MuiBottomNavigationAction-label.Mui-selected': {
    fontSize: {
      xs: 12,
      md: 14,
    },
  },
  '&.Mui-disabled': {
    opacity: 0.25,
  },
};
