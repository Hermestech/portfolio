import axios from "axios";

const getAllProjects = async () => {
    const response = await axios({
        method: 'GET',
        url: 'http://localhost:3000/api/projects',
        headers: {
            'Content-Type': 'application/json',
          },
    });
    return response;
}

export default getAllProjects;