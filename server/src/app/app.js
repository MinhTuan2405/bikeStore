import express, { json, urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import router from '../routes/indexRouter.js';

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(compression());

// Routes
app.use('/api', router);

export default app;

