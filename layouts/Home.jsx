import { Divider, Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Hero from '../containers/Hero';
import UserInfoContainer from '../containers/UserInfoContainer';
import ContactMe from '../components/ContactMe';
import Footer from '../components/Footer';

const Home = () => (
  <>
    <Hero />
    <UserInfoContainer />
    <Box
      sx={{
        margin: '80px 0 20px 0',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ContactMe />
    </Box>
  </>
);

export default Home;
