import { Box, Button } from '@mui/material';
import UserInfo from '../components/UserInfo';

const UserInfoContainer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <UserInfo />
      <Box sx={{ width: '100%', margin: '24px 0 24px 0' }}>
        <Button
          variant='outlined'
          sx={{ width: '202px', height: '48px', marginLeft: '32px' }}
        >
          GO TO PORTFOLIO
        </Button>
      </Box>
    </Box>
  );
};

export default UserInfoContainer;
