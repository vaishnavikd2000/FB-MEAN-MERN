import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fruits: string[];
  newFruit: string;
  isButtonDisabled: boolean;

  constructor() {
    this.fruits = ['apple', 'banana', 'kiwi', 'custardApple', 'Orange'];
    this.newFruit = '';
    this.isButtonDisabled = true; // Initialize the button as disabled
  }

  deleteFruits(index: number) {
    this.fruits.splice(index, 1);
  }

  addFruit() {
    const trimmedFruit = this.newFruit.trim();
    if (trimmedFruit) {
      this.fruits.push(trimmedFruit);
      this.newFruit = '';
      this.isButtonDisabled = true; // Disable the button after adding
    }
  }

  onInputChange() {
    // Enable the button only if the input has non-space characters
    this.isButtonDisabled = this.newFruit.trim().length === 0;
  }

  // addFruit(){
  //   this.fruits.push(this.newFruit);
  //   this.newFruit=''
  // }
}
