import { TestBed } from '@angular/core/testing';

import { LoginSignupService } from './login-signup.service';

describe('LoginSignupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginSignupService = TestBed.get(LoginSignupService);
    expect(service).toBeTruthy();
  });
});
