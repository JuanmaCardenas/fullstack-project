import {Request, Response} from 'express';
import {connect} from '../models/database'
import { User } from '../interface/userInterface';

export async function getUsers(req: Request, res: Response){
    try{
        const orgid = req.params.orgId;
        const connection = await connect();
        const [orgExists]: any = await connection.query('SELECT * FROM assessment.organisation WHERE idOrganisation = ?', [orgid]);

        if (orgExists.length === 0) {
            return res.status(404).json({ error: `Organisation ${orgid} not found` });
        }

        const users = await connection.query('SELECT * FROM assessment.user WHERE org_id = ? AND phone_number is not null', [orgid]);
        res.status(200).json(users[0])
    }catch(error){
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export async function deleteUser(req: Request, res: Response) {
    try {
        const iduser = req.params.orgId;
        const connection = await connect();

        const [userExists]: any = await connection.query('SELECT * FROM assessment.user WHERE iduser = ?', [iduser]);

        if (userExists.length === 0) {
            return res.status(404).json({ error: `User ${iduser} not found` });
        }

        await connection.query('DELETE FROM assessment.user WHERE iduser = ?', [iduser]);
        return res.status(200).json({ message: `User ${iduser} deleted` });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export async function createUser(req: Request, res: Response) {
    try {
        const user: User = req.body;
        const connection = await connect();
        await connection.query('INSERT INTO assessment.user SET ?', [user]);
        return res.status(200).json({ message: `Created user ${user.iduser}` });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export async function getUserById(req: Request, res: Response) {
    try {
        const iduser = req.params.userId;
        const connection = await connect();
        const user : any = await connection.query('SELECT * FROM assessment.user WHERE iduser = ?', [iduser]);
        
        if (user[0].length === 0) {
            return res.status(404).json({ error: `User ${iduser} not found` });
        }
        
        res.status(200).json(user[0]);
    } catch (error) {
        console.error("Error fetching user by ID:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export async function updateUser(req: Request, res: Response) {
    try {
        const user: User = req.body;
        const connection = await connect();
        const [userExists]: any = await connection.query('SELECT * FROM assessment.user WHERE iduser = ?', [user.iduser]);

        if (userExists.length === 0) {
            return res.status(404).json({ error: `User ${user.iduser} not found` });
        }

        await connection.query(
            'UPDATE assessment.user SET name = ?, surname = ?, org_id = ?, phone_number = ? WHERE iduser = ?',
            [user.name, user.surname, user.org_id, user?.phone_number, user.iduser]
        );
        return res.status(200).json({ message: `Updated user ${user.iduser}` });

    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}