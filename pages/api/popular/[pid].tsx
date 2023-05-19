import type { NextApiRequest, NextApiResponse } from 'next'

const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { pid } = req.query
    connection.query(
        'SELECT * FROM `popular` WHERE `id` = ?',[pid],
        function(err:any, results:any) {
            res.status(200).json(results)
        }
    );
}