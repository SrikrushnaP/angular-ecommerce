import { TestBed } from '@angular/core/testing';

import { MyCartService } from './my-cart.service';

describe('MyCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyCartService = TestBed.get(MyCartService);
    expect(service).toBeTruthy();
  });
});
