import { TestBed, inject } from '@angular/core/testing';

import { PassIdService } from './pass-id.service';

describe('PassIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PassIdService]
    });
  });

  it('should be created', inject([PassIdService], (service: PassIdService) => {
    expect(service).toBeTruthy();
  }));
});
