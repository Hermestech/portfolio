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
  project: TProject;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card
      sx={{
        width: { xs: '311px', md: '100%' },
        height: { xs: '700px', md: '500px' },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        '&:nth-child(even)': {
          flexDirection: { xs: 'column', md: 'row-reverse' },
        },
      }}
      key={project.id}
    >
      <CardMedia
        component='img'
        src={project.img_url}
        sx={{
          width: { xs: '311px', md: '50%' },
          height: { xs: '288px', md: '100%' },
        }}
      />
      <Divider sx={{ margin: '32px 0 24px 0' }} />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography variant='h4' sx={{ marginBottom: '24px' }}>
          {project.title_project}
        </Typography>
        <Typography sx={{ marginBottom: '24px' }}>
          {project.description}
        </Typography>
        <Box>
          <Link href={`/projects/${project.id}`}>
            <Button variant='outlined' sx={{ width: '175px', height: '48px' }}>
              <Typography variant='body1'>VIEW PROJECT</Typography>
            </Button>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
