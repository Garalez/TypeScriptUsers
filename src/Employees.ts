import { Users } from './Users';

interface EmployeUser {
  id: number,
  firstname: string,
  surname: string,
  age: number,
  post: string,
}

export class Employees extends Users<EmployeUser> {}