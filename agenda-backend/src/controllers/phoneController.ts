import {Request, response, Response} from 'express';
import {connect} from '../models/database'

export async function getAvalibleNumber(req: Request, res: Response) {
        const connection = await connect();
        const numbers = await connection.query('SELECT idAvalibleNumber FROM assessment.avaliblenumber LEFT JOIN assessment.user on user.phone_number = avaliblenumber.idAvalibleNumber WHERE phone_number IS NULL;');
        res.status(200).json(numbers[0]);
}