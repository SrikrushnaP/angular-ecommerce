import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SellerDashboardComponent } from './seller-dashboard.component';

describe('SellerDashboardComponent', () => {
  let component: SellerDashboardComponent;
  let fixture: ComponentFixture<SellerDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
