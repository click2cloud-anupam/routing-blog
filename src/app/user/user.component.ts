import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userID:any = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.warn("user id is ",this.route.snapshot.paramMap.get('id'));
    this.userID = this.route.snapshot.paramMap.get('id');
  }

}
