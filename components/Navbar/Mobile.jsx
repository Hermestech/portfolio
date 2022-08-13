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
import Image from 'next/image';

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
            marginLeft: { xs: 'none', md: '7%' },
          }}
        >
          <Link href={'/'} sx={{ cursor: 'pointer' }}>
            <Image src={'/logo-footer.png'} width='40px' height={'20px'} />
          </Link>
          <List
            sx={{
              display: { xs: 'none', sm: 'flex' },
              width: '20%',
              height: '32px',
              marginRight: { xs: 'none', md: '7%' },
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
