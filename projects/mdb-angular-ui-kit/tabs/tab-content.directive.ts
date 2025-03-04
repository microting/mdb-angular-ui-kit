import { Directive, InjectionToken, TemplateRef } from '@angular/core';

export const MDB_TAB_CONTENT = new InjectionToken<MdbTabContentDirective>('MdbTabContentDirective');

@Directive({
  selector: '[mdbTabContent]',
  providers: [{ provide: MDB_TAB_CONTENT, useExisting: MdbTabContentDirective }],
})
export class MdbTabContentDirective {
  constructor(public template: TemplateRef<any>) {}
}
