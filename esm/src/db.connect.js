import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { afterDBconnectSuccessful, connectToDBunsuccessful } from '../node-mongo-helpers';

dotenv.config();

const mongooseConnect = async (port) => {
  try {
    await mongoose.connect(`${process.env.MONGODB_ATLAS_URI}`);
    afterDBconnectSuccessful(port);
  } catch (err) {
    connectToDBunsuccessful(err);
  }
}

export default mongooseConnect;
