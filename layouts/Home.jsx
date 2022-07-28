import { Divider, Box, Container } from '@mui/material';
import Hero from '../containers/Hero';
import UserInfoContainer from '../containers/UserInfoContainer';

const Home = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: { xs: '80px', sm: '150px' },
    }}
  >
    <Hero />
    <UserInfoContainer />
  </Box>
);

export default Home;
