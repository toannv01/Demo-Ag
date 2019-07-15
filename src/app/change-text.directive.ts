import { Directive, ElementRef } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {

  constructor(Element: ElementRef) {
      console.log(Element);
      Element.nativeElement.innerText = "Anggular - học lập trình online miễn phí";
   }

}
