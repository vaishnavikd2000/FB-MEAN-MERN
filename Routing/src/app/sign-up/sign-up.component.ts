import { Component } from '@angular/core';
import { User } from './../model/User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
 user: User
  constructor() {
    this.user = new User()
  }
  // handleSignupSubmit(signupForm: any) {
  //   if (this.user.userPassword !== this.user.userConfirmPassword) {
  //     console.error('Passwords do not match!');
  //     alert('Passwords do not match!');
  //     return;
  //   }
  
  //   if (signupForm.valid) {
  //     console.log('Form Submitted Successfully:', this.user);
  //   }
  // }
  handleSignupSubmit(signupForm: any) {
    console.log(signupForm);
    console.log(this.user); // To log the entered user details
  }
    
  
}
