import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundErrorComponent } from './page-not-found-error.component';

describe('PageNotFoundErrorComponent', () => {
  let component: PageNotFoundErrorComponent;
  let fixture: ComponentFixture<PageNotFoundErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
