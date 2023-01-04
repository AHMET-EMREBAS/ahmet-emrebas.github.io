export interface EmployeeInterface<Role> {
  username: string;

  password: string;

  pin: string;

  firstName: string;

  lastName: string;

  phone: string;

  roles: Role[];
}
