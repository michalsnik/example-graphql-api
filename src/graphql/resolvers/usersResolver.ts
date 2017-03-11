import { injectable } from 'inversify';

import { props, users } from '../../data.temp';
import { IGraphQLResolver } from '../index';

@injectable()
export class UsersResolver implements IGraphQLResolver {
  public resolver;

  constructor() {
    this.resolver = {
      Query: {
        users: this.getUsers,
        user: this.getUser,
      },
      User: {
        props: this.getUserProps,
      },
    };
  }

  private getUsers() {
    return users;
  }

  private getUser(_, { id }) {
    return users.filter(u => u.id === Number(id))[0];
  }

  private getUserProps(user) {
    return props.filter(p => p.userId === user.id);
  }
}
