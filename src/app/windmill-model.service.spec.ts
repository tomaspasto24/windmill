import { TestBed } from '@angular/core/testing';

import { WindmillModelService } from './windmill-model.service';

describe('WindmillModelService', () => {
  let service: WindmillModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindmillModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
