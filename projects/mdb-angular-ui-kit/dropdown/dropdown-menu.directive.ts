import { Directive } from '@angular/core';

@Directive({
  selector: '[mdbDropdownMenu]',
  exportAs: 'mdbDropdownMenu',
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class MdbDropdownMenuDirective {
  constructor() {}
}
