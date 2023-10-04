import {
  BoolProperty,
  Model,
  ModelWithName,
  PasswordProperty,
  SubManyRelation,
  UniqueNameProperty,
  UsernameProperty,
} from '@techbir/common';

export const Permission: Model = ModelWithName({ name: 'permission' });

export const Role: Model = {
  name: 'role',
  properties: {
    name: UniqueNameProperty(),
  },
  relations: {
    permissions: SubManyRelation({ name: 'permissions', target: 'Permission' }),
  },
};

export const User: Model = {
  name: 'user',
  properties: {
    username: UsernameProperty({ name: 'username' }),
    password: PasswordProperty({ name: 'password' }),
    isAdmin: BoolProperty({ name: 'isAdmin' }),
  },
  relations: {
    roles: SubManyRelation({ name: 'roles', target: 'Role' }),
  },
};
