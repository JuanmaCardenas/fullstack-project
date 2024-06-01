import { createPool } from "mysql2/promise";

export async function connect() {
    const connection = await createPool({
        host: '127.0.0.1',
        user: 'root',
        database: 'assessment',
        password: 'password',
        connectionLimit: 10,
        port: 3307
    })
    return connection;
}