import * as express from 'express';
import * as bodyParser from 'body-parser';

import { injectable, inject } from 'inversify';

import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { printSchema } from 'graphql';

import TYPES from '../types';
import { IRegistrableController } from './RegistrableController';
import { IGraphQLSchema } from '../graphql/index';

@injectable()
export class GraphQLController implements IRegistrableController {
  @inject(TYPES.GraphQLSchema)
  private graphQL: IGraphQLSchema;

  public register(app: express.Application) {
    app.use('/graphql', bodyParser.json(), graphqlExpress({
      schema: this.graphQL.schema,
      context: {},
    }));

    app.use('/graphiql', graphiqlExpress({
      endpointURL: '/graphql',
    }));

    app.use('/schema', (req, res) => {
      res.set('Content-Type', 'text/plain');
      res.send(printSchema(this.graphQL.schema));
    });
  }
}
