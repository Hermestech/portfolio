import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@mui/material';

import Mobile from './Mobile';

const links = [
  { url: '/', name: 'home' },
  { url: '/projects', name: 'portfolio' },
  { url: '/contact', name: 'contact' },
];

const Navbar = () => {
  return <Mobile links={links} />;
};

export default Navbar;
