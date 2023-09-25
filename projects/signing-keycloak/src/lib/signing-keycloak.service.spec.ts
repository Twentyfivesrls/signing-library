import { TestBed } from '@angular/core/testing';

import { SigningKeycloakService } from './signing-keycloak.service';

describe('SigningKeycloakService', () => {
  let service: SigningKeycloakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SigningKeycloakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
