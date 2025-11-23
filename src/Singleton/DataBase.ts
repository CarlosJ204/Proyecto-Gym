import mysql, { Connection } from 'mysql2';
class DataBase{
    private static instance: DataBase;
    private connection: Connection;
    private constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'proyecto_gym'
        });
        this.connection.connect((err) => {
            if (err) {
                console.error('Error connecting to the database:', err);
            } else {
                console.log('Connected to the database.');
            }
        });
    }
    public static getInstance(): DataBase {
        if (!DataBase.instance) {
            DataBase.instance = new DataBase();
        }
        return DataBase.instance;
    }

    public getConnection(): Connection {
        return this.connection;
    }

    public closeConnection(): void {
        this.connection.end((err) => {
            if (err) {
                console.error('Error closing the database connection:', err);
            } else {
                console.log('Database connection closed.');
            }
        });
    }
}

export default  DataBase ;

