import { Component } from '@angular/core';
import { ApiDataService } from './services/api-data.service';
import { UserdataService } from './services/userdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Services in Angular';
  users: any;
  // constructor(private userdata: UserdataService){
  //   this.users = userdata.users();
  // }
  constructor(private apiDataService: ApiDataService) {
    apiDataService.users().subscribe((data) => {
      console.warn('data', data);
      this.users = data;
    });
    // console.warn(this.users);
    // this.users = data;
  }
}
