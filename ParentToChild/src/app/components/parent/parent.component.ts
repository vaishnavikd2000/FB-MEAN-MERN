import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
userName='vaishnavi@55';
array=[1,2,3,4,5,6,7,8,9,0];
str='Vishal';
inputValue='';
value='';
inputValues=''
subjectName='' 

valueSave(){
this.value=this.inputValues
}
recieveValueFromChild(text:string){
  this.subjectName=text;
  console.log(text , 'Text From Child');
}
}
