import {APP_INITIALIZER, inject, ModuleWithProviders, NgModule} from '@angular/core';
import { SigningKeycloakComponent } from './signing-keycloak.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {SIGNING_CONFIG} from "./config";
import {SigningConfiguration} from "./signing-configuration";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {CustomPermissionInterceptor} from "./custom-permission.interceptor";

@NgModule({
  declarations: [
    SigningKeycloakComponent
  ],
  imports: [
    KeycloakAngularModule
  ],
  exports: [
    SigningKeycloakComponent
  ]
})
export class SigningKeycloakModule {
}

export function provideSigningModule(env: SigningConfiguration): ModuleWithProviders<SigningKeycloakModule> {
  return {
    ngModule: SigningKeycloakModule,
    providers: [
      {
        provide: SIGNING_CONFIG,
        useValue: env
      },
      {
        provide: APP_INITIALIZER,
        useFactory: initializeKeycloak,
        multi: true,
        deps: [KeycloakService],
      },
      { provide: HTTP_INTERCEPTORS, useClass: CustomPermissionInterceptor, multi: true },
    ]
  };
}




export function initializeKeycloak(
  keycloak: KeycloakService
) {
  console.log("FACCIO INIZIALIZZAZIONE KEYCLOAK");
  var environment : SigningConfiguration = inject(SIGNING_CONFIG) as SigningConfiguration;
  return () =>
    keycloak.init({
      loadUserProfileAtStartUp: true,
      config: {
        url: environment.keycloakurl,
        realm: environment.realmname,
        clientId: environment.clientid,
      },
      initOptions: {
        pkceMethod: 'S256',
        // must match to the configured value in keycloak
        redirectUri: environment.redirecturi,
        checkLoginIframe: false
      }
    });
}
