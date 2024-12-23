import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { FindReplaceComponent } from './find-replace/find-replace.component';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom( BrowserModule,
    FormsModule)
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));