import { injectable } from 'inversify';

import { IGraphQLType } from '../index';

@injectable()
export class MutationType implements IGraphQLType {
  public defs;

  constructor() {
    this.defs = `
      type Mutation {
        upvoteProp (propId: Int!): Prop
        addProp (prop: PropInput): Prop
        updateProp (propId: Int!, prop: PropInput): Prop
        deleteProp (propId: Int!): Prop
      }
    `;
  }
}
