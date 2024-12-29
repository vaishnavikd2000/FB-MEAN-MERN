import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  firstName = "Vaishnavi";
  // firstName="";
  userName = 'Vishal';
  // userName='';
  // showValue=true;
  showValue = false;
  players: string[] = ['Virat', 'Dhoni', 'Rohit', 'Sachin'];
  playername = 'Virat';
  applycss = true
  active = false
  headingClass = 'heading';
  myClass = {
    class: this.applycss,
    title: this.active,
    // disabled:!this.applycss
  }
  disabledClass = {
    disabled: !this.applycss,
    title: this.active,
  }
  mystyle = {
    color: this.applycss ? 'red' : 'yellow'
  }
  activeStyle = {
    color: 'red'
  }
  disabledStyle = {
    color: 'yelloe'
  }
  changeColor() {
    this.applycss = !this.applycss
    console.log(this.applycss + ' toggle');
  }
  valueChange(){
    console.log('First NAme is ' + this.firstName)
  }
}
