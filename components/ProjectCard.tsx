import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Divider,
} from '@mui/material';
import Link from 'next/link';

type ProjectCardProps = {
  project: TProject,
};

const ProjectCard = ({project} : ProjectCardProps) => {
  return (
    <Card sx={{ width: '311px', height: '700px' }} key={project.id}>
      <CardMedia
       component="img"
       src={project.img_url}
       sx={{ width: '311px', height: '288px' }}/>
      <Divider sx={{ margin: '32px 0 24px 0' }} />
      <CardContent>
        <Typography variant='h4' sx={{ marginBottom: '24px' }}>
          {project.title_project}
        </Typography>
        <Typography sx={{ marginBottom: '24px' }}>
          {project.description}
        </Typography>
        <Box>
          <Link href={`/projects/${project.id}`}>
          <Button variant='outlined' sx={{width:'175px', height:'48px'}}>
            <Typography variant='body1'>VIEW PROJECT</Typography>
          </Button>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
