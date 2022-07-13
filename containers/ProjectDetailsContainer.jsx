import { useAsync } from '../hooks/useAsync';
import getProjectById from '../fetch/getProjectById';
import { Alert, CircularProgress } from '@mui/material';
import ProjectDetails from '../layouts/ProjectDetails';
import { useEffect } from 'react';

const ProjectDetailsContainer = ({ id }) => {
  const { value, status, error, execute } = useAsync(
    () => getProjectById(id),
    false
  );

  useEffect(() => {
    if (id) {
      execute();
    }
  }, [id]);

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
    return <ProjectDetails project={value.data} />;
  }
};

export default ProjectDetailsContainer;
