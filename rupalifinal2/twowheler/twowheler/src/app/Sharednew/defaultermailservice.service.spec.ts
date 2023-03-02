import { TestBed } from '@angular/core/testing';

import { DefaultermailserviceService } from './defaultermailservice.service';

describe('DefaultermailserviceService', () => {
  let service: DefaultermailserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultermailserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
