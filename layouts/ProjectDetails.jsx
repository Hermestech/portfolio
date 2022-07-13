import ProjectCard from '../components/ProjectCard';
import { Typography, Box, CardMedia, Card, Container } from '@mui/material';
import ContactMe from '../components/ContactMe';
import Image from 'next/image';

const ProjectDetails = ({ project }) => {
  const mapUrlsToCard = (project) =>
    project.attributes.img_urls.map((img, i) => (
      <Card sx={{ width: '313px', height: '197px' }}>
        <CardMedia
          component='img'
          src={img}
          width='100%'
          height='100%'
          key={i}
        />
      </Card>
    ));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40px',
      }}
    >
      <ProjectCard project={project} />
      <Box sx={{ width: '311px', height: '400px', marginTop: '48px' }}>
        <Typography variant='h4' sx={{ paddingBottom: '28px' }}>
          Project Background
        </Typography>
        <Typography variant='body1'>{project.attributes.details}</Typography>
      </Box>

      <Box>
        <Typography variant='h4' sx={{ paddingBottom: '40px' }}>
          Static Previews
        </Typography>
        <Box
          sx={{
            width: '313px',
            height: '426px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {mapUrlsToCard(project)}
        </Box>
        <Box
          sx={{
            margin: '80px 0 20px 0',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <ContactMe />
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectDetails;
