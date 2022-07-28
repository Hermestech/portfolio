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
    </Box>
  );
};

export default UserInfoContainer;
