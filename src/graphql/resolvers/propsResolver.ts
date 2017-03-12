import { injectable, inject } from 'inversify';

import TYPES from '../../types';
import { IPropsService } from '../../services/PropsService';
import { IGraphQLResolver } from '../index';

import { props, users } from '../../data.temp';

@injectable()
export class PropsResolver implements IGraphQLResolver {
  public resolver;

  @inject(TYPES.PropsService)
  private propsService: IPropsService;

  constructor() {
    this.resolver = {
      Query: {
        props: this.getProps.bind(this),
      },
      Prop: {
        receivers: this.getPropReceivers,
      },
      Mutation: {
        upvoteProp: this.upvoteProp,
        addProp: this.addProp,
        updateProp: this.updateProp,
        deleteProp: this.deleteProp,
      },
    };
  }

  private getProps(_, args, context) {
    return this.propsService.getAllProps();
  }

  private getPropReceivers(prop) {
    return users.filter((u) => prop.receivers.map(r => Number(r.id)).indexOf(u.id) > -1);
  }

  private upvoteProp(_, { propId }) {
    const prop = props.filter(p => p.id === Number(propId))[0];
    if (!prop) {
      throw new Error(`Couldn't find props with id ${propId}`);
    }
    prop.votes += 1;
    return prop;
  }

  private addProp(_, { prop }) {
    prop.id = props.slice(-1)[0].id + 1;
    prop.votes = 0;
    props.push(prop);
    return prop;
  }

  private updateProp(_, { propId, prop }) {
    let updatedProp;
    props.map(p => {
      if (p.id === Number(propId)) {
        updatedProp = Object.assign(p, prop);
        return updatedProp;
      }
      return p;
    });
    return updatedProp;
  }

  private deleteProp(_, { propId }) {
    const propIndex = props.findIndex(p => p.id === Number(propId));
    const deletedProp = props.splice(propIndex, 1)[0];
    return deletedProp;
  }
}
