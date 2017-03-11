import { injectable } from 'inversify';

import { IGraphQLType } from '../index';

@injectable()
export class QueryType implements IGraphQLType {
  public defs;

  constructor() {
    this.defs = `
      type Query {
        props: [Prop]
        users: [User]
        user(id: ID!): User
      }
    `;
  }
}
