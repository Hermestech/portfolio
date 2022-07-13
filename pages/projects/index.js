import { Box } from "@mui/system";
import ProjectsContainer from "../../containers/ProjectsContainer";
import ContactMe from "../../components/ContactMe";

const index = () => (
    <>
    <ProjectsContainer/>

    <Box sx={{
        width:'100%',
        margin: '80px 0 20px 0',
        display:'flex',
        justifyContent:'center',
        }}>
    <ContactMe/>
    </Box>
    </>
)

export default index;
