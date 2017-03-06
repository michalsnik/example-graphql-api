import { Container } from 'inversify';
import TYPES from './types';

const container = new Container();
// container.bind<ISomething>(TYPES.Something).to(Something);

export default container;
