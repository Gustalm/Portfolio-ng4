import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appScrollMenu]',
})
export class ScrollDirective {

  constructor() { }

  @HostBinding('class.affix') toggleClass = false;

  @HostListener("window:scroll", ['$event']) onScroll(event: Event) {
     this.toggleClass = window.pageYOffset > 0;
  }

}
