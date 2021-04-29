import { TestBed, inject } from '@angular/core/testing';

import { SessionstorageService } from './sessionstorage.service';

describe('SessionstorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionstorageService]
    });
  });

  it('should be created', inject([SessionstorageService], (service: SessionstorageService) => {
    expect(service).toBeTruthy();
  }));
});
