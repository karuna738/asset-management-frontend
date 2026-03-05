import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
  standalone: true
})
export class UnlessDirective {
  private hasView = false;
  constructor(private tpl: TemplateRef<any>, private vc: ViewContainerRef) {}

  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.vc.createEmbeddedView(this.tpl);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.vc.clear();
      this.hasView = false;
    }
  }
}
