import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';


@Component({
  selector: 'app-root',
  imports: [UserComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactive-form-app';
}
