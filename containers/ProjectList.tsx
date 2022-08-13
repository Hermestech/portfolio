import {
  Grid,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
  Divider,
} from '@mui/material';
import ProjectCard from '../components/ProjectCard';

type ProjectListProps = {
  projects: TProject[];
};

const mapProjectsToCard = (projects: TProject[]) =>
  projects.map((project, i) => (
    <ProjectCard project={project} key={project.id} />
  ));

const ProjectList = ({ projects }: ProjectListProps): JSX.Element => {
  return (
    <Box
      sx={{
        width: { xs: '100vw', md: '80vw' },
        marginTop: '40px',
        display: 'flex',
        justifyeSelf: 'center',
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '80px',
      }}
    >
      {mapProjectsToCard(projects)}
    </Box>
  );
};

export default ProjectList;
