import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
firstName='Vaishu';
number= 15;
floatingNumber=45.634567;
 todaydate = new Date();
date='12-10-2024'
}
