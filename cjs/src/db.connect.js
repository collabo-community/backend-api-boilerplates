const mongoose = require('mongoose');
const { afterDBconnectSuccessful, connectToDBunsuccessful } = require('../node-mongo-helpers');
const dotenv = require('dotenv');

dotenv.config();

const mongooseConnect = async function(port) {
  try {
    await mongoose.connect(`${process.env.MONGODB_ATLAS_URI}`);
    afterDBconnectSuccessful(port);
  } catch (err) {
    connectToDBunsuccessful(err);
  }
}

module.exports = mongooseConnect;
