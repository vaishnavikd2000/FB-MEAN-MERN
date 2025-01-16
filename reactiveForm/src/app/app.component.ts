import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';


@Component({
  selector: 'app-root',
  imports: [ReactiveFormComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactive-form-app';
}
