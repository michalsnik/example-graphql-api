import { injectable } from 'inversify';

import { IGraphQLType } from '../index';

@injectable()
export class UserType implements IGraphQLType {
  public defs;

  constructor() {
    this.defs = `
      type User {
        id: ID!
        email: String
        firstName: String
        lastName: String
        props: [Prop]
      }

      input UserInput {
        id: ID
        email: String
        firstName: String
        lastName: String
        props: [PropInput]
      }
    `;
  }
}
