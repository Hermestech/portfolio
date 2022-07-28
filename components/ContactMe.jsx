import { Box, Typography, Button, Container } from '@mui/material';
import { width } from '@mui/system';
import Link from 'next/link';

const ContactMe = () => {
  return (
    <Box
      sx={{
        height: { xs: '311px', sm: '200px' },
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '85%',
          height: '100%',
          display: { xs: 'flex', sm: 'grid' },
          flexDirection: 'column',
          justifyContent: 'space-around',
          gridTemplateColumns: 'repeat(2,1fr)',
        }}
      >
        <Box sx={{ paddingRight: { xs: 'none', sm: '200px' } }}>
          <Typography
            variant='h4'
            sx={{
              fontSize: { xs: '40px', sm: '32px' },
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            Interested in doing a project together?
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: { xs: 'center', sm: 'flex-end' },
          }}
        >
          <Button variant='outlined'>CONTACT ME</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactMe;
