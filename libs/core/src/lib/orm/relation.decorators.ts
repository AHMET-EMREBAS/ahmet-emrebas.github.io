import { applyDecorators } from '@nestjs/common';
import {
  OneToOne as OTO,
  ManyToMany as MTM,
  ManyToOne as MTO,
  OneToMany as OTM,
  RelationOptions,
  JoinTable,
  JoinColumn,
} from 'typeorm';
import { ClassConstructor } from '../types/class-contructor';

type RelationType = 'OneToOne' | 'ManyToMany' | 'ManyToOne' | 'OneToMany';
type ID = { id: number };

function Relation<T extends ID>(
  type: RelationType,
  target: ClassConstructor<T>,
  options: RelationOptions
) {
  if (type === 'ManyToMany') {
    return applyDecorators(
      MTM(
        () => target,
        (t) => t.id,
        options
      ),
      JoinTable()
    );
  }

  if (type === 'ManyToOne') {
    return applyDecorators(
      MTO(
        () => target,
        (t) => t.id,
        options
      ),
      JoinColumn()
    );
  }

  if (type === 'OneToMany') {
    return applyDecorators(
      OTM(
        () => target,
        (t) => t.id,
        options
      ),
      JoinTable()
    );
  }

  if (type === 'OneToOne') {
    return applyDecorators(
      OTO(
        () => target,
        (t) => t.id,
        options
      )
    );
  }

  throw new Error(`${type} is not match for any realtion decorator!`);
}

export const ManyToMany = <T extends ID>(
  target: ClassConstructor<T>,
  options: RelationOptions
) => Relation('ManyToMany', target, options);

export const ManyToOne = <T extends ID>(
  target: ClassConstructor<T>,
  options: RelationOptions
) => Relation('ManyToOne', target, options);

export const OneToOne = <T extends ID>(
  target: ClassConstructor<T>,
  options: RelationOptions
) => Relation('OneToOne', target, options);

export const OneToMany = <T extends ID>(
  target: ClassConstructor<T>,
  options: RelationOptions
) => Relation('OneToMany', target, options);
