import { Box } from '@mui/material';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';

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
        // paddingTop: { xs: '117px', md: '144px' },
        paddingBottom: '85px',
        maxWidth: '1280px',
      }}
    >
      {children}
    </Box>
    <Footer />
  </>
);

export default Layout;
