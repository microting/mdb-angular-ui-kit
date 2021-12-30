import { Directive, InjectionToken, TemplateRef } from '@angular/core';

export const MDB_ACCORDION_ITEM_BODY = new InjectionToken<MdbAccordionItemBodyDirective>(
  'MdbAccordionItemBodyDirective'
);

@Directive({
  selector: '[mdbAccordionItemBody]',
  providers: [{ provide: MDB_ACCORDION_ITEM_BODY, useExisting: MdbAccordionItemBodyDirective }],
})
export class MdbAccordionItemBodyDirective {
  constructor(public template: TemplateRef<any>) {}
}
