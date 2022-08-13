import { Box } from '@mui/material';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import ContactMe from '../components/ContactMe';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <Box
      sx={{
        minHeight: 'calc(100vh - 250px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 'auto',
        paddingBottom: '85px',
        maxWidth: '1280px',
      }}
    >
      {children}
    </Box>
    <ContactMe />
    <Footer />
  </>
);

export default Layout;
