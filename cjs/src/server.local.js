const mongooseLocalConnect = require('./db.local.connect');
const { app } = require('./app');

const port = process.env.PORT_LOCAL || 3000;

app.listen(port, function () {
  mongooseLocalConnect(port);
});
