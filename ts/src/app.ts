import 'express-async-errors';
import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import { errorHandler } from './api/exceptions/ErrorHandler';
import { CustomErrorInterface } from './api/exceptions/CustomError';
import { NotFoundError } from './api/exceptions/errors/NotFoundError';
import { router as appRouter } from './api/routes/app.route';
import { router as demoRouter } from './api/routes/demo.route';

dotenv.config();

const app: Express = express();

app.use(morgan('dev'));
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(cors({ origin: [`http://localhost:${process.env.CLIENT_APP_PORT}`, `${process.env.CLIENT_APP_URL}`] }));

//====== Use Routers =======
app.use('/', appRouter);
app.use('/demo', demoRouter);
//==========================


//========= Throw Route Not Found Error ==========
app.use(() => {
  throw new NotFoundError("Route Not Found")
});
//==========================================


//====== Error handler Middleware ==========
app.use((err: CustomErrorInterface, req: Request, res: Response, next: NextFunction) => {
  errorHandler.handleError(err, res);
  next()
});
//==========================================

export { app };
