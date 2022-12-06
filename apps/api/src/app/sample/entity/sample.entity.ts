import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sample {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ unique: true })
  name: string;
}
