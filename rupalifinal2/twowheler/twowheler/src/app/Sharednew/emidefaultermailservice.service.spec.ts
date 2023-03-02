import { TestBed } from '@angular/core/testing';

import { EmidefaultermailserviceService } from './emidefaultermailservice.service';

describe('EmidefaultermailserviceService', () => {
  let service: EmidefaultermailserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmidefaultermailserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
