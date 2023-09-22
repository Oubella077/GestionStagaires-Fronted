import { TestBed } from '@angular/core/testing';

import { AbsentsService } from './absents.service';

describe('AbsentsService', () => {
  let service: AbsentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbsentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
