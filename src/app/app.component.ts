import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Services in Angular';
  memberData = [
    {
      name: 'Anupam',
      email: 'anupam@gmail.com',
    },
    {
      name: 'Shubham',
      email: 'shubham@gmail.com',
    },
    {
      name: 'Tom',
      email: 'tom@gmail.com',
    },
    {
      name: 'Anup',
      email: 'anup@gmail.com',
    },
    {
      name: 'Peter',
      email: 'peter@gmail.com',
    },
  ];
}
