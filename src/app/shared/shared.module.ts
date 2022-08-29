import { NgModule } from '@angular/core';

// a description of creating a standalone component is indside of details.component.html

import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [HighlightDirective],
  exports: [HighlightDirective],
})
export class SharedModule {}
