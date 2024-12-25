import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'myApp';
  flag: boolean;
 
  constructor() {
    this.flag = true
    
  }
  hide() {
    this.flag = false
  }
  show() {
    this.flag = true
  }
  // toggle() {
  //   if (this.flag) {
  //     this.flag = false;  // Use the assignment operator '=' here
  //   } else {
  //     this.flag = true;  // Correct assignment
  //   }
  // }
  toggle() {
    this.flag = !this.flag
  }
 

}

