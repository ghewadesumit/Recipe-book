import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggelOpen(){

    this.isOpen = !this.isOpen;
    console.log('listening', this.isOpen);
  }
}
