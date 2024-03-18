import { CustomError, HttpCode } from "../CustomError";

export class BadRequestError extends CustomError {
  constructor(message: string){
    super(message, HttpCode.BAD_REQUEST)
  }
}