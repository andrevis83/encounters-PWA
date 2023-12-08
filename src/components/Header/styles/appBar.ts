import type { SxProps, Theme } from '@mui/material';

export const appBar: SxProps<Theme> | undefined = {
  background: (theme) => theme.palette.background.paper,
  boxShadow: 'none',
};
