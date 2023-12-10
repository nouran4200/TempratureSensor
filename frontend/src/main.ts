import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppServerModule } from './app/app.server.module';

// Always enable production mode
enableProdMode();

platformBrowserDynamic().bootstrapModule(AppServerModule)
  .catch(err => console.error(err));
