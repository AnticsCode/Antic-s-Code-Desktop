import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';
import { LanguageModule } from '@core/language/language.module';
import { MaterialModule } from './material/material.module';
import { NebularModule } from '@app/core/nebular/nebular.module';

@NgModule({
  declarations: [],
  imports: [
    PipesModule,
    TranslateModule,
    LanguageModule,
    ReactiveFormsModule,
    FormsModule,
    DirectivesModule,
    MaterialModule,
    NebularModule
  ],
  exports: [
    PipesModule,
    TranslateModule,
    LanguageModule,
    ReactiveFormsModule,
    FormsModule,
    DirectivesModule,
    MaterialModule,
    NebularModule
  ]
})

export class SharedModule { }
