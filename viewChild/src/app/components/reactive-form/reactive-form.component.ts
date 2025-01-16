import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  imports: [ CommonModule, ReactiveFormsModule,FormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  // regForm: FormGroup;

  // constructor() {
  //   // Initialize the form group with form controls
  //   this.regForm = new FormGroup({
  //     name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  //   });
  // }

  // creating a reactive form with formbuilder class

  regForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.regForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@]).{6,}$'),
        ],
      ],
    });
  }
  // Method to handle form submission
  onSubmit() {
    if (this.regForm.valid) {
      console.log(this.regForm.value); // Form data
    } else {
      console.log( this.regForm,'Form is invalid');
    }
    console.log(this.regForm.get('password')?.errors);

  }

  greeting() {
    console.log('Greeting from ReactiveForm component successfully');
  }
}
