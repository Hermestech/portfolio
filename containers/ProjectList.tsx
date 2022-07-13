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
}

const mapProjectsToCard = (projects: TProject[]) =>
  projects.map( project => (
    <ProjectCard project={project} />
  ) )

const ProjectList = ({projects}: ProjectListProps): JSX.Element => {
  console.log(projects)
  return(
  <Box sx={{marginTop:'40px', width:'100vw', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'80px'}}>
    {mapProjectsToCard(projects)}
  </Box>
)
}

export default ProjectList;