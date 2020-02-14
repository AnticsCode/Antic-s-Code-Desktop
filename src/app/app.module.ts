import 'reflect-metadata';
import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from '@shared/components/components.module';
import { AppComponent } from './app.component';
import { APP_CONFIG, APP_CONSTANTS } from './app.config';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    ComponentsModule
  ],
  providers: [{ provide: APP_CONFIG, useValue: APP_CONSTANTS}],
  bootstrap: [AppComponent]
})

export class AppModule {}
