import { TestBed } from '@angular/core/testing';

import { CommonMaterialService } from './common-material.service';

describe('CommonMaterialService', () => {
  let service: CommonMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonMaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
