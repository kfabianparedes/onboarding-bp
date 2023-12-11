import { TestBed } from '@angular/core/testing';

import { GenericHeaderService } from './generic-header.service';

describe('GenericHeaderService', () => {
  let service: GenericHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
