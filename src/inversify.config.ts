import { Container } from 'inversify';
import TYPES from './types';
import { IRegistrableController } from './controllers/RegistrableController';
import { GraphQLController } from './controllers/GraphQLController';

const container = new Container();
container.bind<IRegistrableController>(TYPES.Controller).to(GraphQLController);

export default container;
