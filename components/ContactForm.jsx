import {
  FormControl,
  Box,
  FormHelperText,
  TextField,
  Button,
} from '@mui/material';

const ContactForm = () => {
  return (
    <Box
      component='form'
      sx={{
        height: '432px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <TextField id='outlined-basic' label='Name' variant='outlined' />
      <TextField
        id='outlined-basic'
        label='email@example.com'
        variant='outlined'
      />
      <TextField
        id='outlined-multiline-static'
        label='How can I help?'
        multiline
        rows={4}
      />
      <Button
        sx={{ width: '200px', height: '48px' }}
        variant='contained'
        type='submit'
      >
        Send Message
      </Button>
    </Box>
  );
};

export default ContactForm;
