import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrolltotop]'
})
export class ScrolltotopDirective {

  constructor() { }

  @HostListener('click')onclick(){
      this.scrolltoTop();
  }
  
  private scrolltoTop(){
      window.scrollTo({
        top:0,
        behavior:'smooth'
      })
  }

}
