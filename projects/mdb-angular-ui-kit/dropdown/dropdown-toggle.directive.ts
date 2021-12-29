import { Directive } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[mdbDropdownToggle]',
  exportAs: 'mdbDropdownToggle',
})
export class MdbDropdownToggleDirective {
  constructor() {}
}
