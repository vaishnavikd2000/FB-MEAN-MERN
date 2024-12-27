import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: string = ''; // Single user input bound to the form
  users: string[]; // List of predefined users
  usernameExists: boolean | null = null; // Tracks if username exists or not (null = not checked yet)
  text: string;

  constructor() {
    this.users = ['Vaishnavi@04', 'Vishal@04', 'Renuka@08', 'Khanderao@55'];
    this.text = '';
    this.user = '';
  }

  onSubmit() {
    const trimmedUser = this.user.trim(); // Remove leading and trailing spaces

    if (this.users.includes(trimmedUser)) {
      // If the username exists in the array
      this.text = 'Username already exists';
      console.log('Username exists:', trimmedUser);
      console.log(this.users);
    } else {
      // If the username is not in the array
      this.text = 'Username available';
      console.log('Username available:', trimmedUser);
      console.log(this.user);
    }
  }
}
