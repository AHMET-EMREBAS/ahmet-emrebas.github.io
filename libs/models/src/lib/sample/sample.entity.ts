import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'sample' })
export class SampleEntity {
  @Column({ type: 'text', unique: true })
  name: string;

  @ManyToOne(() => SampleEntity, (s) => s.name, {
    eager: true,
    nullable: true,
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
    cascade: ['insert'],
  })
  @JoinColumn()
  category: any;

  @ManyToMany(() => SampleEntity)
  @JoinTable()
  L: any;

  @OneToMany(() => SampleEntity, (e) => e.name)
  @JoinTable()
  k: any;
}
