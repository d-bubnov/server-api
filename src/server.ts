import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import { DataBaseConfig, getEnvs } from './utils';
import { productRoute } from './routes';

// Trying to get 'SERVER_PORT' environment variable
const { serverPort } = getEnvs([
  { name: 'SERVER_PORT', default: '4000' },
]);

// Configure mongoose
mongoose.Promise = global.Promise;
mongoose
  .connect(
    DataBaseConfig.Uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(
    () => {
      console.log('Database is connected');
    },
    (error: any) => {
      console.log(`Can not connect to the database. Error: ${error}`);
    },
  );

// Configure application
const application = express();
const appBodyParser = bodyParser.json();
const appCors = cors();

// body parsing middleware (parse incoming request bodies)
application.use(appBodyParser);
// Connect/Express middleware (enable CORS)
application.use(appCors);
// middleware to handle a requests
application.use('/products', productRoute);

// Start server with API on selected http port
application.listen(
  serverPort,
  () => {
    console.log(`Server started on port: ${serverPort}`);
  },
);
