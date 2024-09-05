import { TestBed } from '@angular/core/testing';

import { M3ApiService } from './m3-api.service';

describe('M3ApiService', () => {
  let service: M3ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(M3ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
