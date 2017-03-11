import { injectable } from 'inversify';

import { IGraphQLType } from '../index';

@injectable()
export class PropType implements IGraphQLType {
  public defs;

  constructor() {
    this.defs = `
      type Prop {
        id: ID!
        text: String
        receivers: [User]
        votes: Int
      }

      input PropInput {
        id: ID
        text: String
        receivers: [UserInput]
        votes: Int
      }
    `;
  }
}
