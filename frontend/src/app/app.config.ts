import { ApplicationConfig } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router';  // Adjust for Angular 2.x or above
import { provideClientHydration } from '@angular/platform-browser';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    ROUTER_PROVIDERS,  // Adjust for Angular 2.x or above
    provideClientHydration()
  ]
};
