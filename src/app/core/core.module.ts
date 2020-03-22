import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';

import {
  CORE_MODULE_CONSTANTS,
  CORE_MODULE_CONFIG,
  createTranslateLoader
} from './core.module.config';

import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { LanguageModule } from './language/language.module';
import { StorageModule } from './storage/storage.module';
import { ErrorHandlerService } from './error-handler/error-handler.service';
import { NgxWebstorageModule } from 'ngx-webstorage';

import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServicesModule } from './services/services.module';
import { JwtInterceptor } from './services/http/jwt.interceptor';
import { NgMarkdownModule } from './markdown/markdown.module';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './ngrx/reducers/reducers.index';
import { DraftEffects } from './ngrx/effects/draft.effects';
import { UserEffects } from './ngrx/effects/user.effects';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    StorageModule,
    ServicesModule,
    LanguageModule.forRoot(),
    NgMarkdownModule,
    ToastrModule.forRoot(),
    StoreModule.forFeature('AppState', reducers),
    EffectsModule.forRoot([
      DraftEffects,
      UserEffects
    ]),
    NgxWebstorageModule.forRoot(CORE_MODULE_CONSTANTS.WEBSTORAGE_CONFIG),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: CORE_MODULE_CONFIG, useValue: CORE_MODULE_CONSTANTS },
    { provide: ErrorHandler, useClass: ErrorHandlerService }
  ],
  exports: []
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
