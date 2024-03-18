import { CustomError, HttpCode } from "../CustomError";

export class NotFoundError extends CustomError {
  constructor(message: string){
    super(message, HttpCode.NOT_FOUND)
  }
}