import * as express from 'express';
import * as bodyParser from 'body-parser';

import { injectable } from 'inversify';

import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { printSchema } from 'graphql';

import { IRegistrableController } from './RegistrableController';

@injectable()
export class GraphQLController implements IRegistrableController {
  public register(app: express.Application) {
    app.route('/')
      .get((req, res) => {
        res.send('trololol');
      });

    // app.use('/graphql', bodyParser.json(), graphqlExpress({
    //   schema,
    //   context: {},
    // }));

    // app.use('/graphiql', graphiqlExpress({
    //   endpointURL: '/graphql',
    // }));

    // app.use('/schema', (req, res) => {
    //   res.set('Content-Type', 'text/plain');
    //   res.send(printSchema(schema));
    // });
  }
}
