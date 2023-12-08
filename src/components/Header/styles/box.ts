import type { SxProps, Theme } from '@mui/material';

export const box: SxProps<Theme> | undefined = { color: (theme) => theme.palette.primary.main, display: 'flex', fontSize: 24 };
