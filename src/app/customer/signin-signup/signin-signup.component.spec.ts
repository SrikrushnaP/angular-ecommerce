import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SigninSignupComponent } from './signin-signup.component';

describe('SigninSignupComponent', () => {
  let component: SigninSignupComponent;
  let fixture: ComponentFixture<SigninSignupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
