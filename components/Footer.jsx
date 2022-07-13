import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const links = [
  { url: '/', name: 'home' },
  { url: '/projects', name: 'portfolio' },
  { url: '/contarct', name: 'contact' },
];

const icons = [<GitHubIcon />, <TwitterIcon />, <LinkedInIcon />];

const mapItemsToList = (items) =>
  items.map(({ url, name }, i) => (
    <Link href={url} key={i}>
      <Typography variant='body1' color='white'>
        {name.toUpperCase()}
      </Typography>
    </Link>
  ));

const Footer = () => {
  return (
    <Box
      sx={{
        width: '375px',
        height: '354px',
        background: '#33323D',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          width: '104px',
          height: '242px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: '',
        }}
      >
        <Box>
          <Image src='/logo-footer.png' width={61} height={32} />
        </Box>
        {mapItemsToList(links)}
        <Box sx={{ width: '100%', display: 'flex' }}>
          {icons.map((item, i) => (
            <IconButton key={i} sx={{ padding: '5px', color: 'white' }}>
              {item}
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
