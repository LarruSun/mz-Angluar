import { TestBed, inject } from '@angular/core/testing';

import { LftFalgService } from './lft-falg.service';

describe('LftFalgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LftFalgService]
    });
  });

  it('should be created', inject([LftFalgService], (service: LftFalgService) => {
    expect(service).toBeTruthy();
  }));
});
