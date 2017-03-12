import { injectable } from 'inversify';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export interface PropsDTO {
  id: number;
  text: string;
  votes: number;
}

@injectable()
@Entity('props')
export class PropsEntity implements PropsDTO {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column('text')
  public text: string;

  @Column('int')
  public votes: number;

}
