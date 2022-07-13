import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Typography,
} from '@mui/material';
import Image from 'next/image';

const UserInfo = () => {
  return (
    <Card sx={{ width: '311px' }}>
      <Image src='/alex.png' width={311} height={346} />
      <Divider sx={{ margin: '32px 0 32px 0' }} />
      <Typography variant='h4' sx={{ paddingLeft: '1rem' }}>
        About Me
      </Typography>
      <CardContent>
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
      </CardContent>
    </Card>
  );
};

export default UserInfo;
