import { NgModule } from '@angular/core';

import { LogoPipe } from './logo/logo.pipe';
import { ImagePipe } from './image/image.pipe';
import { SanitizerPipe } from './sanitizer/sanitizer.pipe';
import { MediaIconPipe } from './media-icon/media-icon.pipe';
import { StatusPipe } from './status/status.pipe';
import { PublicSlugPipe } from './public-slug/public-slug.pipe';
import { CheckboxPipe } from './checkbox/checkbox.pipe';

@NgModule({
  declarations: [
    ImagePipe,
    LogoPipe,
    SanitizerPipe,
    MediaIconPipe,
    StatusPipe,
    PublicSlugPipe,
    CheckboxPipe
  ],
  exports: [
    ImagePipe,
    LogoPipe,
    SanitizerPipe,
    MediaIconPipe,
    StatusPipe,
    PublicSlugPipe,
    CheckboxPipe
  ]
})

export class PipesModule { }
