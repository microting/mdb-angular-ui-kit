import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[mdbLabel]',
  exportAs: 'mdbLabel',
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class MdbLabelDirective {
  constructor() {}
}
