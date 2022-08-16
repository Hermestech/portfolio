import { Box, Typography, Button } from '@mui/material';

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
          <Typography variant='h1'>
            Hey, I´m Alex Spencer and I love building beautiful websites
          </Typography>
          <Box sx={{ width: '100%' }}>
            <Button variant='contained' color='primary'>
              ABOUT ME
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
