import { Component } from '@angular/core';
import { CrudComponentComponent } from './components/crud-component/crud-component.component';
// import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [CrudComponentComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactive-form-app';
}
