import express from 'express';
import helmet from 'helmet';
import config from './config/config';
import {publisherRoutes} from './publisher';
import {applyPolyfills} from './utils';

applyPolyfills();
const app = express();
app.set('port', config.port);
app.use(helmet());

app.use(publisherRoutes);

export default app;
