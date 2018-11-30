import { NgModule } from '@angular/core';
import { TranslatePipe } from './translate.pipe';
import { SanitizerPipe } from './sanitizer.pipe';




@NgModule({
  declarations: [
    TranslatePipe,
    SanitizerPipe
  ],
  exports: [
    TranslatePipe,
    SanitizerPipe
  ],
  imports: [],
  providers: [],
  bootstrap: []
})
export class PipesModule { }
