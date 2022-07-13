import { NextApiRequest, NextApiResponse } from "next";
import DB from '../../../database/db';

const allProjects = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const db = new DB();
        const allEntries = await db.getAll();
        const length = allEntries.length;

        res.status(200).json({data:allEntries, length})
    } catch (error) {
        console.error(error);
        res.status(404).end()
    }
};

export default allProjects;