import { TestBed } from '@angular/core/testing';

import { PaiseServiceService } from './paise-service.service';

describe('PaiseServiceService', () => {
  let service: PaiseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaiseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
