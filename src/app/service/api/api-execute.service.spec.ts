import { TestBed } from '@angular/core/testing';

import { ApiExecuteService } from './api-execute.service';

describe('ApiExecuteService', () => {
  let service: ApiExecuteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiExecuteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
