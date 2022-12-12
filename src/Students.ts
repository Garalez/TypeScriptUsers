import { Users } from './Users'

interface StudentUser {
  id: number,
  firstname: string,
  surname: string,
  age: number,
  year: number,
  specialty: string,
}

export class Students extends Users<StudentUser> {}