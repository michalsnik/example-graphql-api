import { injectable, inject } from 'inversify';
import {
  createConnection,
  Connection,
  Repository,
  ConnectionOptions,
} from 'typeorm';
import { PropsEntity, PropsDTO } from '../entities/Props';

export interface IPropsRepository {
  findAll(): Promise<PropsDTO[]>;
}

@injectable()
export class PropsRepository implements IPropsRepository {
  private repository: Repository<PropsEntity>;

  constructor() {
    this.connect()
      .then((connection) => {
        this.repository = connection.getRepository(PropsEntity);
      })
      .catch((err) => {
        console.log('Cannot connect to database', err);
      });
  }

  public async findAll(): Promise<PropsDTO[]> {
    return this.repository.find();
  }

  private connect(): Promise<Connection> {
    return createConnection(<ConnectionOptions> {
      driver: {
        type: 'postgres',
        host: 'localhost',
        username: 'snik',
        password: '',
        database: 'postgres',
        port: 5432,
      },
      logging: {
        logQueries: true,
        logSchemaCreation: true,
      },
      autoSchemaSync: true,
      entities: [
        PropsEntity,
      ],
    });
  }
}
