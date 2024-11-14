import { TestBed } from '@angular/core/testing';

import { RestaurentDataService } from './restaurent-data.service';

describe('RestaurentDataService', () => {
  let service: RestaurentDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurentDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
