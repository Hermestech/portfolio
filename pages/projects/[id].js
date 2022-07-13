import { useRouter } from "next/router";
import ProjectDetailsContainer from "../../containers/ProjectDetailsContainer";

const ProjectItem = () => {
    const {
        query: {id}
    } = useRouter();

    return (
        <ProjectDetailsContainer id={id} />
    )
}

export default ProjectItem;