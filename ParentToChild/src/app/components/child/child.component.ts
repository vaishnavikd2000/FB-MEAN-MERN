import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // @input is used to send data from parent to child
@Input () firstName='';
@Input() arr:number[]=[];
@Input() str=' ';
@Input () inputValue= '';
@Input () inputValues=''
// @Output used to send data from child to parent
@Output () sendChildValue=new EventEmitter()
sendDataToParent(){
  this.sendChildValue.emit('Mean Mern Stack')
}
 }
