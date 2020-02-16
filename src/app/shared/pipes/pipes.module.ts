import { NgModule } from '@angular/core';

import { LogoPipe } from './logo/logo.pipe';
import { ImagePipe } from './image/image.pipe';
import { SanitizerPipe } from './sanitizer/sanitizer.pipe';

@NgModule({
  declarations: [
    ImagePipe,
    LogoPipe,
    SanitizerPipe
  ],
  exports: [
    ImagePipe,
    LogoPipe,
    SanitizerPipe
  ]
})

export class PipesModule { }
