import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User
  constructor() {
    this.user = new User()
  }
  handleLoginSubmit(loginForm: any) {
    console.log(loginForm);
  }

}

