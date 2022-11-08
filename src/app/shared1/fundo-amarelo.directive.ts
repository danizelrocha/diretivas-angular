import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor( private _elementRef: ElementRef) {
   /*  console.log(this._elementRef); */
    this._elementRef.nativeElement.style.backgroundColor ='yellow';
  }

}
