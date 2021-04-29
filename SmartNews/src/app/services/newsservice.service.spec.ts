import { TestBed, inject } from '@angular/core/testing';

import { NewsserviceService } from './newsservice.service';

describe('NewsserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsserviceService]
    });
  });

  it('should be created', inject([NewsserviceService], (service: NewsserviceService) => {
    expect(service).toBeTruthy();
  }));
});
