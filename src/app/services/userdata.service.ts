import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  constructor() {}
  users() {
    return [
      {
        name: 'Anupam',
        age: 20,
        email: 'anupam@gmail.com',
      },
      {
        name: 'Shubham',
        age: 22,
        email: 'shubham@gmail.com',
      },
      {
        name: 'John',
        age: 36,
        email: 'john@example.com',
      },
      {
        name: 'Peter',
        age: 25,
        email: 'peter@example.com',
      },
      {
        name: 'Bob',
        age: 23,
        email: 'bob@example.com',
      },
      {
        name: 'Alice',
        age: 21,
        email: 'alice@example.com',
      },
    ];
  }
}
