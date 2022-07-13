import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

const ContactMe = () => {
  return (
    <Box
      sx={{
        width: '311px',
        height: '214px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'center',
      }}
    >
      <Typography
        variant='h4'
        width='311px'
        height='126px'
        sx={{ padding: '0 16px  0 16px' }}
      >
        Interested in doing a project together?
      </Typography>
      <Box width='100%'>
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
