import { NgModule } from '@angular/core';

import { LogoPipe } from './logo/logo.pipe';
import { ImagePipe } from './image/image.pipe';
import { SanitizerPipe } from './sanitizer/sanitizer.pipe';
import { MediaIconPipe } from './media-icon/media-icon.pipe';

@NgModule({
  declarations: [
    ImagePipe,
    LogoPipe,
    SanitizerPipe,
    MediaIconPipe
  ],
  exports: [
    ImagePipe,
    LogoPipe,
    SanitizerPipe,
    MediaIconPipe
  ]
})

export class PipesModule { }
