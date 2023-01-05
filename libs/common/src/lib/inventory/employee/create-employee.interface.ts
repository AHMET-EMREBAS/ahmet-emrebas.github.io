export interface CreateEmployeeInterface {
  username: string;

  password: string;

  pin: string;

  firstName: string;

  lastName: string;

  phone: string;

  roles: { id: number }[];
}
