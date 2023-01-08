import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sample {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'text', nullable: true }) name: string;
}
