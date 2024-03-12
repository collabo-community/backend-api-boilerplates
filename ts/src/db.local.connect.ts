import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { afterLocalDBconnectSuccessful, connectToDBunsuccessful } from '../node-mongo-helpers';

dotenv.config();

const mongooseLocalConnect = async (port: number | string) => {
  try {
    await mongoose.connect(`${process.env.MONGODB_LOCAL_URI}`);
    afterLocalDBconnectSuccessful(port);
  } catch (err) {
    connectToDBunsuccessful(err);
  }
}

export default mongooseLocalConnect;
