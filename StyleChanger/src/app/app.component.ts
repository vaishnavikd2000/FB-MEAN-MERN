import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'myApp';
  count: number;  // Use lowercase 'count' here

  constructor() {
    this.count = 0;
  }

  clickHandler() {
    console.log(this.count++);  // Access the property using 'count'
  }
  resetHandler(){
    this.count = 0;
  }
}
