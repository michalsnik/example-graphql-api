import { Container } from 'inversify';
import TYPES from './types';

// Controllers
import { IRegistrableController } from './controllers/RegistrableController';
import { GraphQLController } from './controllers/GraphQLController';

// GraphQL
import {
  GraphQLSchema,
  IGraphQLSchema,
  IGraphQLType,
  IGraphQLResolver,
} from './graphql/index';

import { QueryType } from './graphql/types/QueryType';
import { PropType } from './graphql/types/PropType';
import { UserType } from './graphql/types/UserType';
import { MutationType } from './graphql/types/MutationType';

import { PropsResolver } from './graphql/resolvers/propsResolver';
import { UsersResolver } from './graphql/resolvers/usersResolver';

const container = new Container();
container.bind<IRegistrableController>(TYPES.Controller).to(GraphQLController);

container.bind<IGraphQLSchema>(TYPES.GraphQLSchema).to(GraphQLSchema);

container.bind<IGraphQLType>(TYPES.GraphQLType).to(QueryType);
container.bind<IGraphQLType>(TYPES.GraphQLType).to(PropType);
container.bind<IGraphQLType>(TYPES.GraphQLType).to(UserType);
container.bind<IGraphQLType>(TYPES.GraphQLType).to(MutationType);

container.bind<IGraphQLResolver>(TYPES.GraphQLResolver).to(PropsResolver);
container.bind<IGraphQLResolver>(TYPES.GraphQLResolver).to(UsersResolver);

export default container;
