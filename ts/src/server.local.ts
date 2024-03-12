import mongooseLocalConnect from './db.local.connect';
import { app as app } from './app';

const port = process.env.PORT_LOCAL || 3000;

app.listen(port, () => {
  mongooseLocalConnect(port);
});
