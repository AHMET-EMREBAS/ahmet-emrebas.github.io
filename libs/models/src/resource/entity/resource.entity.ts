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
export class Resource {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'text', unique: true })
  name: string;
}
