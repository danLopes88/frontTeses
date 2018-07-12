import { TestBed, inject } from '@angular/core/testing';

import { TesesService } from './teses.service';

describe('TesesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TesesService]
    });
  });

  it('should be created', inject([TesesService], (service: TesesService) => {
    expect(service).toBeTruthy();
  }));
});
