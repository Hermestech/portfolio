import { useAsync } from '../hooks/useAsync';
import getAllProjects from '../fetch/getAllProjects';
import { Alert, CircularProgress } from '@mui/material';
import ProjectList from './ProjectList';

const ProjectsContainer = () => {
  const { value, status, error } = useAsync(getAllProjects, true);
  if (status === 'pending') {
    return <CircularProgress />;
  }
  if (status === 'error') {
    return <Alert severity='error' />;
  }

  if (status === 'idle') {
    return <></>;
  }

  if (value != null) {
    return <ProjectList projects={value.data.data} />;
  }
};

export default ProjectsContainer;
