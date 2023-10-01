import { ModelNames } from './model-names';
import { RelationOptions } from './relation-options';

export class CommonRelations {
  static Owner(target: ModelNames): RelationOptions {
    return {
      type: 'ManyToOne',
      target,
      onDelete: 'CASCADE',
      eager: true,
      join: true,
    };
  }

  static OneOwner(target: ModelNames): RelationOptions {
    return {
      type: 'OneToOne',
      target,
      onDelete: 'CASCADE',
      eager: true,
      join: true,
    };
  }

  static Sub(target: ModelNames): RelationOptions {
    return {
      target,
      type: 'ManyToOne',
      eager: true,
      nullable: true,
      join: true,
    };
  }

  static Subs(target: ModelNames): RelationOptions {
    return {
      target,
      type: 'ManyToMany',
      eager: true,
      nullable: true,
      join: true,
    };
  }

  static Child(target: ModelNames): RelationOptions {
    return {
      target,
      type: 'OneToOne',
      eager: true,
      nullable: true,
    };
  }

  static Children(target: ModelNames): RelationOptions {
    return {
      target,
      type: 'OneToMany',
      eager: true,
      nullable: true,
    };
  }
}
