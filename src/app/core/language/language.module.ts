import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';

@NgModule({
  imports: [TranslateModule]
})

export class LanguageModule {
  constructor(public language: LanguageService) {}
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: LanguageModule,
      providers: [
        LanguageService
      ]
    };
  }
}
