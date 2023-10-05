import {
  BoolProperty,
  Model,
  ModelWithName,
  PasswordProperty,
  SubManyRelation,
  UniqueNameProperty,
  UsernameProperty,
} from '@techbir/common';

export const Permission: Model = ModelWithName({
  name: 'permission',
  icon: 'security',
});

export const Role: Model = {
  name: 'role',
  icon: 'admin_panel_settings',
  properties: {
    name: UniqueNameProperty(),
  },
  relations: {
    permissions: SubManyRelation({ name: 'permissions', target: 'Permission' }),
  },
};

export const User: Model = {
  name: 'user',
  icon: 'person',
  properties: {
    username: UsernameProperty({ name: 'username' }),
    password: PasswordProperty({ name: 'password' }),
    isAdmin: BoolProperty({ name: 'isAdmin', label: 'Is Admin' }),
  },
  relations: {
    roles: SubManyRelation({ name: 'roles', target: 'Role' }),
  },
};
