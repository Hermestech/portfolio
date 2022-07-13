import { NextApiRequest, NextApiResponse } from 'next'
import DB from '../../../database/db';

const ProjectDetail = async(req: NextApiRequest, res: NextApiResponse) => {
    try {
        const db = new DB()
        const projectId = req.query.id as string
        const pro = await db.getById(projectId)

        res.status(200).json(pro)
    } catch (error) {
        console.error(error)
        res.status(404).end()
    }
}

export default ProjectDetail;