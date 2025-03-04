import { Directive, InjectionToken, TemplateRef } from '@angular/core';

export const MDB_TAB_TITLE = new InjectionToken<MdbTabTitleDirective>('MdbTabTitleDirective');

@Directive({
  selector: '[mdbTabTitle]',
  providers: [{ provide: MDB_TAB_TITLE, useExisting: MdbTabTitleDirective }],
})
export class MdbTabTitleDirective {
  constructor(public template: TemplateRef<any>) {}
}
