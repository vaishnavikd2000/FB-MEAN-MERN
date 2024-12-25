import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'myApp';

  fruits: string[]

  constructor() {
    this.fruits = ['apple', 'banana', 'kiwi', 'custardApple', 'Orange']
  }

  deleteFruits(index: number) {
    this.fruits.splice(index, 1)
  }

}

