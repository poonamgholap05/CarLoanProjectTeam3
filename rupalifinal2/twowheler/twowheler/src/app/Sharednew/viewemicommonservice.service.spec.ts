import { TestBed } from '@angular/core/testing';

import { ViewemicommonserviceService } from './viewemicommonservice.service';

describe('ViewemicommonserviceService', () => {
  let service: ViewemicommonserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewemicommonserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
