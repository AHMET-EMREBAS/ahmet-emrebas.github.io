import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Operation {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'text', unique: true })
  name: string;
}
