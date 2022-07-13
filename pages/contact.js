import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Typography, Divider,Container ,IconButton} from "@mui/material";
import ContactForm from '../components/ContactForm';

const icons = [<GitHubIcon />, <TwitterIcon />, <LinkedInIcon />];

const contact = () => {
  return (
    <Container sx={{marginTop:'40px'}}>
    <Divider/>
    <Box>
        <Typography variant="h4" sx={{padding:'24px 0 24px 0'}}>Get in Touch</Typography>
        <Typography>
        I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.
        </Typography>
        <Box sx={{ width: '100%', display: 'flex', margin:'32px 0 24px 0' }}>
        {icons.map((item, i) => (
            <IconButton key={i} sx={{ padding: '5px'}}>
              {item}
            </IconButton>
          ))}
        </Box>
    </Box>
    <Divider/>
    <Box sx={{height:'492px',marginTop:'32px'}}>
    <Typography variant="h4" sx={{marginBottom:'24px'}}>Contact Me</Typography>
    <ContactForm/>
    </Box>


    </Container>

  )
};

export default contact;
