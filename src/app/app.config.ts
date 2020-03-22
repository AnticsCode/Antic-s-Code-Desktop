// APP_CONFIG: Injection token to hold application-wide configuration properties that can be injected into other
// application elements such as components or services.

import { InjectionToken } from '@angular/core';
import * as fromDrafts from '@app/core/ngrx/reducers/draft.reducer';
import * as fromUsers from '@core/ngrx/reducers/user.reducer';

const DEV = 'http://localhost:3000/';
const PRE = 'http://192.168.1.97:3000/';
const PROD = 'https://antics-code.herokuapp.com/';
const APP_VERSION = '0.4.0';
export const URI = 'https://anticscode.netlify.com';

export interface AppState {
  drafts: fromDrafts.DraftState,
  user: fromUsers.UserState
}

export interface AppConfig {
  TITLE: string;
  DEFAULT_LANGUAGE: string;
  END_POINT: string;
  APP_VERSION: string;
  THEME: string;
  PLATFORM: string;
}

export const APP_CONSTANTS: AppConfig = {
  TITLE: 'Antic\'s Code Desktop',
  DEFAULT_LANGUAGE: 'es',
  END_POINT: PROD,
  APP_VERSION,
  THEME: 'default',
  PLATFORM: 'Electron'
};

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');
