import { Component, ElementRef, ViewChild } from '@angular/core';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent {
  @ViewChild('changeTxt') changeTxt!: ElementRef;
  @ViewChild('childComp') childComponent!: ReactiveFormComponent;

  changeText() {
    if (this.changeTxt) {
      this.changeTxt.nativeElement.textContent = 'Text changed successfully!';
      console.log('Text changed successfully');
    }
  }

  callChildFun() {
    if (this.childComponent) {
      this.childComponent.greeting();
    }
  }
}
