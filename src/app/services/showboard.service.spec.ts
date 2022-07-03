import { TestBed } from '@angular/core/testing';

import { ShowboardService } from './showboard.service';

describe('ShowboardService', () => {
  let service: ShowboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
