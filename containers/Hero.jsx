import { Card, Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <Box
      sx={{
        widt: '100%',
        height: '100vh',
        display: { xs: 'flex', sm: 'grid' },
        gridTemplateColumns: 'repeat(4,1fr)',
        gridTemplateRows: 'repeat(3,1fr)',
        gridTemplateAreas: `"image image image image"
          "text text image image"
          "text text image image"
        `,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(/hero-home.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box
        sx={{
          background: '#FAFAFA',
          gridRow: '3 / 4',
          gridColumn: '1 / 3',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: { xs: '70vh', md: '357px' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant='h2'>
            Hey, I´m Alex Spencer and I love building beautiful websites
          </Typography>
          <Box sx={{ width: '100%' }}>
            <Button variant='contained' sx={{ width: '200px', height: '48px' }}>
              ABOUT ME
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
{
  /* <Card
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
<Box sx={{ width: '85%' }}>
  <Button variant='outlined' sx={{ width: '200px', height: '48px' }}>
    ABOUT ME
  </Button>
</Box>
</Box> */
}
