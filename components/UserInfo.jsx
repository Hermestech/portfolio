import {
  Box,
  Card,
  Button,
  CardMedia,
  CardContent,
  Divider,
  Typography,
} from '@mui/material';

const UserInfo = () => (
  <Card
    sx={{
      width: { xs: '311px', sm: '90%' },
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      gap: { xs: '0', sm: '32px' },
    }}
  >
    <CardMedia
      component='img'
      src='https://i.imgur.com/t8qXd3Q.png'
      sx={{
        width: { xs: '311px', sm: '40%' },
        height: { xs: '346px', sm: '600px' },
      }}
    />

    <Divider sx={{ margin: '32px 0 32px 0' }} />
    <CardContent
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: {
            xs: '100%',
            sm: '305px',
          },
          height: { xs: '100%', sm: '502px' },
        }}
      >
        <Typography variant='h4' sx={{ paddingBottom: '24px' }}>
          About Me
        </Typography>
        <Typography variant='body1'>
          I’m a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in London, UK, but I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.
        </Typography>

        <Box
          sx={{
            marginTop: { xs: '24px', sm: '40px' },
            paddingBottom: { xs: '48px', sm: '0' },
          }}
        >
          <Button sx={{ width: '202px', height: '48px' }} variant='outlined'>
            GO TO MY PORTFOLIO
          </Button>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

export default UserInfo;
