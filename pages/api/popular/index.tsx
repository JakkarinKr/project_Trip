import type { NextApiRequest, NextApiResponse } from 'next'

const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    connection.query(
        'SELECT * FROM `popular`',
        function(err:any, results:any) {
            res.status(200).json(results)
        }
    );
}
