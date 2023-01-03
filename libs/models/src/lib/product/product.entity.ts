import {
  BarcodeProperty,
  PositiveIntegerProperty,
  PositiveNumberProperty,
} from '@ae/core/property/property.decorator';
import { Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { Category } from '../category/category.entity';
import { Department } from '../department/department.entity';
import { Img } from '../img/img.entity';
import { NameEntity } from '../shared/name.entity';
import { Relation, RelationType } from '@ae/core/relations/relation.decorator';

@Entity()
export class Product extends NameEntity {
  @PositiveNumberProperty() price: number;
  @PositiveNumberProperty() cost: number;
  @PositiveIntegerProperty() quantity: number;

  @BarcodeProperty({ unique: true }) upc: string;

  @Relation(Category, { type: RelationType.OneToMany, eager: true })
  imgs: Img[];

  @Relation(Category, { type: RelationType.ManyToOne, eager: true })
  category: Category;

  @Relation(Department, { type: RelationType.ManyToOne, eager: true })
  department: Department;
}
