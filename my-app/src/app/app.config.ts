import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { OktaAuthModule } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js'; 
import { oktaConfig } from './okta.config';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    importProvidersFrom(
      OktaAuthModule.forRoot({
        oktaAuth: new OktaAuth(oktaConfig) // Use your shared config here
      })
    ),
    provideRouter(routes)
  ]
};
