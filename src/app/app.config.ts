// APP_CONFIG: Injection token to hold application-wide configuration properties that can be injected into other
// application elements such as components or services.

import { InjectionToken } from '@angular/core';

const DEV = 'http://localhost:3000/';
const PRE = 'http://192.168.1.97:3000/';
const PROD = 'https://antics-code.herokuapp.com/';
const APP_VERSION = '0.0.1';
export const URI = 'https://anticscode.netlify.com';

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
  END_POINT: DEV,
  APP_VERSION,
  THEME: 'default',
  PLATFORM: 'Electron'
};

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');
