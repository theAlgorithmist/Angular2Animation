// platform imports - JIT compilation
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { enableProdMode } from '@angular/core';

import { environment    } from './app/';
import { AnimBootModule } from './app/app.module';

if (environment.production) 
{
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AnimBootModule);


