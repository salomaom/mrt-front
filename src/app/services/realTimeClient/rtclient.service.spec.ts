import { TestBed } from '@angular/core/testing';

import { RTClientService } from './rtclient.service';

describe('RTClientService', () => {
  let service: RTClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RTClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
