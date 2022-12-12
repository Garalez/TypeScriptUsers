import { Students } from "./Students";
import { Employees } from "./Employees";

const students = new Students();

students.add({
    id: 1,
    firstname: 'Павел',
    surname: 'Иванов',
    age: 35,
    year: 1,
    specialty: 'front-end',
});

students.add({
    id: 2,
    firstname: 'Сергей',
    surname: 'Михайлов',
    age: 33,
    year: 1,
    specialty: 'front-end',
});

students.add({
    id: 3,
    firstname: 'Иван',
    surname: 'Никонов',
    age: 22,
    year: 1,
    specialty: 'front-end',
});

students.add({
    id: 4,
    firstname: 'Марьяна',
    surname: 'Попова',
    age: 27,
    year: 1,
    specialty: 'front-end',
});

students.add({
    id: 5,
    firstname: 'Руслан',
    surname: 'Павлов',
    age: 22,
    year: 1,
    specialty: 'front-end',
});


const employees = new Employees();

employees.add({
  id: 7,
  firstname: 'Иван',
  surname: 'Федоров',
  age: 29,
  post: 'Куратор',
});

employees.add({
  id: 8,
  firstname: 'Сергей',
  surname: 'Петров',
  age: 33,
  post: 'Менеджер',
});

console.log('getEmployee', employees.get(8));
console.log('removeStudent', students.remove(3));


console.log('students.sorted ', students.sorted());
