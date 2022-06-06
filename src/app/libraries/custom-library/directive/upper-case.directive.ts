import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUpperCase]'
})
export class UpperCaseDirective {

  constructor(public elementRef: ElementRef) {
  }
  @HostListener('keyup') onKeyUp() {
    this.elementRef.nativeElement.value = this.elementRef.nativeElement.value.toUpperCase();
  }
}
