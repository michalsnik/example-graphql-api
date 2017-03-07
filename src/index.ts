import 'reflect-metadata';

import * as express from 'express';
import container from './inversify.config';
import TYPES from './types';

import { IRegistrableController } from './controllers/RegistrableController';

const app: express.Application = express();
const controllers: IRegistrableController[] = container.getAll<IRegistrableController>(TYPES.Controller);

controllers.forEach(controller => controller.register(app));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
