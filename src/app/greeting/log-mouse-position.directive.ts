import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLogMousePosition]',
})
export class LogMousePositionDirective {
  constructor(private element: ElementRef) {}

  @HostListener('click')
  public onMouseover() {}
}
