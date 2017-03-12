import { injectable, inject } from 'inversify';
import TYPES from '../types';
import { IPropsRepository } from '../repositories/PropsRepository';
import { Props } from '../models/Props';
import { PropsDTO } from '../entities/Props';

export interface IPropsService {
  getAllProps(): Promise<Props[]>;
}

@injectable()
export class PropsService implements IPropsService {
  @inject(TYPES.PropsRepository)
  private propsRepository: IPropsRepository;

  public async getAllProps(): Promise<Props[]> {
    const allProps = await this.propsRepository
      .findAll()
      .then((props) => {
        return props.map(p => this.toDAO(p));
      });

    return allProps;
  }

  private toDAO(propsDTO: PropsDTO): Props {
    return new Props(
      propsDTO.text,
      propsDTO.votes,
      propsDTO.id,
    );
  }

  private toDTO(props: Props): PropsDTO {
    return {
      id: props.getId,
      text: props.getText,
      votes: props.getVotes,
    };
  }
}
