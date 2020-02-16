import { NgModule } from '@angular/core';
import { LogoPipe } from './logo/logo.pipe';
import { ImagePipe } from './image/image.pipe';

@NgModule({
  declarations: [
    ImagePipe,
    LogoPipe
  ],
  exports: [
    ImagePipe,
    LogoPipe
  ]
})

export class PipesModule { }
