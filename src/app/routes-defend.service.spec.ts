import { TestBed, inject } from '@angular/core/testing';

import { RoutesDefendService } from './routes-defend.service';

describe('RoutesDefendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutesDefendService]
    });
  });

  it('should be created', inject([RoutesDefendService], (service: RoutesDefendService) => {
    expect(service).toBeTruthy();
  }));
});
