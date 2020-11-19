import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orphanages')
export class Orphanage {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column('varchar')
  name: string;

  @Column('decimal')
  latitude: number;

  @Column('decimal')
  longitude: number;

  @Column('varchar')
  about: string;

  @Column('varchar')
  instructions: string;

  @Column('varchar')
  opening_hours: string;

  @Column('boolean')
  open_on_weekends: boolean;
}
