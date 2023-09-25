import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigningKeycloakComponent } from './signing-keycloak.component';

describe('SigningKeycloakComponent', () => {
  let component: SigningKeycloakComponent;
  let fixture: ComponentFixture<SigningKeycloakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigningKeycloakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigningKeycloakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
