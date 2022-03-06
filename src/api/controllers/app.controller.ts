import { Request, Response } from 'express';

export const getAppHandler = async (req: Request, res: Response) => {
  res.status(200).json({
    message: 'App works!'
  });
}