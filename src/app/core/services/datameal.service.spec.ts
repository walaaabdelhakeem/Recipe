import { TestBed } from '@angular/core/testing';

import { DatamealService } from './datameal.service';

describe('DatamealService', () => {
  let service: DatamealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatamealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
