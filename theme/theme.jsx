import { createTheme, Theme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FAFAFA',
      light: '#203A4C',
      dark: '#33323D',
    },
    secondary: {
      main: '#5FB4A2',
      light: '#EAEAEB',
      dark: '#F43030',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Ibarra Real Nova',
      fontWeight: '700',
      fontSize: '50px',
      lineHeight: '50px',
      letter: '-0.45px',
    },
    h2: {
      fontFamily: 'Ibarra Real Nova',
      fontWeight: '700',
      fontSize: '40px',
      lineHeight: '42px',
      letter: '-0.36px',
    },
    h3: {
      fontFamily: 'Ibarra Real Nova',
      fontWeight: '400',
      fontSize: '32px',
      lineHeight: '36px',
      letter: '-0.29px',
    },
    body1: {
      fontFamily: 'Public Sans',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '30px',
    },
    body2: {
      fontFamily: 'Public Sans',
      fontWeight: '400',
      fontSize: '15px',
      lineHeight: '30px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '15px',
          textTransform: 'none',
          overflowWrap: 'normal',
          padding: '10px, 24px, 10px, 24px',
          gap: '10px',
        },
      },
    },
  },
});
