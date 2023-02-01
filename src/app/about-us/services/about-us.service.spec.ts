import { TestBed } from '@angular/core/testing';

import { AboutUsService } from './about-us.service';

describe('AboutUsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AboutUsService = TestBed.get(AboutUsService);
    expect(service).toBeTruthy();
  });
});
