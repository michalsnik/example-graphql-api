import 'reflect-metadata';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { printSchema } from 'graphql';

// import TYPES from './types';
// import container from './inversify.config';

const app: express.Application = express();

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

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
