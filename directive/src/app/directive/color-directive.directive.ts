import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorDirective]'
})
export class ColorDirectiveDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = "grey"; // Corrected property name
  }

}
