import { TestBed } from '@angular/core/testing';

import { CompareFilesService } from './compare-files.service';

describe('CompareFilesService', () => {
  let service: CompareFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompareFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
