import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
