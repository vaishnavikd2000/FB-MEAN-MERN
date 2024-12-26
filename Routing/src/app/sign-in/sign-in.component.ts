import { Component } from '@angular/core';
import { User } from './../model/User';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SIgnInComponent {
  user: User
  constructor() {
    this.user = new User()
  }
  handleLoginSubmit(loginForm: any) {
    console.log(loginForm);
  }

}
