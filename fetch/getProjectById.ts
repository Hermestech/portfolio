import axios from "axios";

const getProjectById = async (id:string) => {
    const response = await axios({
        method: 'GET',
        url: `http://localhost:3000/api/projects/A001`,
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response;
}

export default getProjectById;