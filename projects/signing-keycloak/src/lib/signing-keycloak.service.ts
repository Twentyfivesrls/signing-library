import {Inject, Injectable} from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {SigningConfiguration} from "./signing-configuration";
import {SIGNING_CONFIG} from "./config";

@Injectable({
  providedIn: 'root'
})
export class SigningKeycloakService {



  constructor(private keycloakService: KeycloakService) {

  }


  public signout(){
    this.keycloakService.logout();
  }

  public loggedUsername(){
    return this.keycloakService.getUsername();
  }

  public loggedUserRoles(){
    return this.keycloakService.getUserRoles();
  }

  // environment.keycloakurl  -- http://localhost:8080
  // environment.realmname  -- External
  // environment.clientid  -- external-client-fe
  // environment.redirecturi  -- http://localhost:4200/private




}
