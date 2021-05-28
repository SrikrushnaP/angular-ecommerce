import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BuyerDashboardComponent } from './buyer-dashboard.component';

describe('BuyerDashboardComponent', () => {
  let component: BuyerDashboardComponent;
  let fixture: ComponentFixture<BuyerDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
