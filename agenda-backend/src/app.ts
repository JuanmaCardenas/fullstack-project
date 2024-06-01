import express, { Application } from "express";
import morgan from 'morgan';
import cors from 'cors';
import homeRoutes from './routes/homeRouters';
import userRoutes from './routes/userRoutes'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'

//const port = 3306;


export class App {
    app: Application

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', this.port || 5000 || process.env.PORT);
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(morgan('dev'));
        this.app.use(express.json())
    }

    routes() {
        this.app.use('/home', homeRoutes)
        this.app.use('/user', userRoutes)
    }

    async listen() {
        await this.app.listen(this.port, () => {this.app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))});
        console.log(`[server]: Server is running at http://localhost:5000`);
    }

}