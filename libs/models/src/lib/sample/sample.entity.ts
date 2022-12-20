import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'sample' })
export class SampleEntity {
  @Column({ type: 'text', unique: true })
  name: string;

  @ManyToOne(() => SampleEntity, (s) => s.name, { onDelete: 'SET NULL' })
  @JoinColumn()
  category: any;
}
