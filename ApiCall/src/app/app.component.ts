import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users:any
 constructor(){
  this.users=[]
 }
 getUsers(){
  // fetch user from https://jsonplaceholder.typicode.com/users
  // fetch('https://jsonplaceholder.typicode.com/users').then(Response => console.log(Response))
  fetch('https://jsonplaceholder.typicode.com/users') //bring data using rest api 
  .then(Response => Response.json())  //convert response into json
  // .then(data=> console.log(data));  //print the data
  .then(data=> this.users=data);  //save the data
 }
 ngOnInit(){
  // called when appcomponent is loaded in browser
  this.getUsers();
 }
}
