import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { Error404Component } from './error404/error404.component';
import { LoaderComponent } from './loader/loader.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    Error404Component,
    LoaderComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule
  ],
  exports: [
    LoaderComponent,
    Error404Component,
    SpinnerComponent,
    LayoutModule
  ]
})

export class ComponentsModule { }
