import { Card, Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <Box
      sx={{
        widht: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card
        sx={{
          marginTop: '40px',
          width: '311px',
          height: '271px',
        }}
      >
        <Image src='/bitmap.jpg' width={311} height={271} />
      </Card>
      <Box sx={{ width: '311px', margin: '24px 0 32px 0' }}>
        <Typography variant='h3' fontSize='40px'>
          Hey, I´m Alex Spencer and I love building beautiful webs
        </Typography>
      </Box>
      <Box sx={{ width: '85%' }}>
        <Button variant='outlined' sx={{ width: '200px', height: '48px' }}>
          ABOUT ME
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
