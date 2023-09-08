import express, {Request, Response} from 'express'
import dotenv from "dotenv"
import cors from 'cors';
import helmet from 'helmet';
//I,ported and given local names - routes are passed via an array to express app
import router from './routes'
import logger from './middleware/logger.middleware';

dotenv.config();

//variables 
const app = express();
const port = 3000;

//enable all CORS requests
app.use(cors());

//parse json bodies
app.use(express.json());

//parse url-encoded bodies
app.use(express.urlencoded({extended: true}));

//adding set of security middleware
app.use(helmet());

console.log(process.env.MY_SQL_DB_HOST);

app.use('/', router);

//MySqlConnector.InitializeMySqlConnector();
if(process.env.NODE_ENV == 'development'){
    //add logger middleware
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode');
}

//Application routes
//root route
app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Welcome to the ShuttleU API </h1>');
});

//adding router middleware
app.use('/', router);


app.listen(port, () => console.log(`App listening on port ${port}`));