import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListeItemButton,
  ListItemButton,
} from '@mui/material';
import Link from 'next/link';

import MenuIcon from '@mui/icons-material/Menu';

const Mobile = ({ links }) => {
  const mapItemsToList = (items) =>
    items.map(({ url, name }, i) => (
      <Link href={url} key={i}>
        <Typography variant='body1' color='white'>
          {name.toUpperCase()}
        </Typography>
      </Link>
    ));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ ml: 2 }}>HA</Typography>
          <List
            sx={{
              display: { xs: 'none', sm: 'flex' },
              width: '50%',
              height: '32px',
              justifyContent: 'space-between',
            }}
          >
            {mapItemsToList(links)}
          </List>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 0.5, display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Mobile;
