import { Directive, HostBinding, HostListener  } from '@angular/core';

@Directive({
  selector: '[appHeartClick]'
})
export class HeartClickDirective {
  @HostBinding('class.red-heart') isClicked = false;
  constructor() { }

  @HostListener("click") heartToggle(){
    this.isClicked = !this.isClicked;
  }

}
