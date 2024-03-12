const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { afterLocalDBconnectSuccessful, connectToDBunsuccessful } = require('../node-mongo-helpers');

dotenv.config();

const mongooseLocalConnect = async function (port) {
  try {
    await mongoose.connect(`${process.env.MONGODB_LOCAL_URI}`);
    afterLocalDBconnectSuccessful(port);
  } catch (err) {
    connectToDBunsuccessful(err);
  }
}

module.exports = mongooseLocalConnect;
