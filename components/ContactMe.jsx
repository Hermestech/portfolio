import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

const ContactMe = () => {
  return (
    <Box
      sx={{
        width: { xs: '311px', sm: '90vw' },
        height: '214px',
        display: { xs: 'block', sm: 'flex' },
        flexDirection: { xs: 'column', sm: 'row' },
        textAlign: { xs: 'center', sm: 'left' },
      }}
    >
      <Box
        sx={{
          width: { xs: '311px', sm: '70%' },
          height: { xs: '126px', sm: '100%' },
          padding: { xs: '0 16px  0 16px', md: '0' },
          display: { xs: 'block', sm: 'flex' },
          aligItems: 'center',
          justifyContent: 'center',
          marginBottom: { xs: '20px', md: '0' },
        }}
      >
        <Typography variant='h4' sx={{ marginTop: { xs: '20px', sm: '20%' } }}>
          Interested in doing a project together?
        </Typography>
      </Box>

      <Box
        sx={{
          width: {
            xs: '100%',
            md: '50%',
          },
          display: { xs: 'block', sm: 'flex' },
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Link href='/contact'>
          <Button variant='outlined' sx={{ width: '162px', height: '48px' }}>
            CONTACT ME
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ContactMe;
