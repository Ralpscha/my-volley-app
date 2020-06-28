import { TestBed } from '@angular/core/testing';

import { AanvraagService } from './aanvraag.service';

describe('AanvraagService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AanvraagService = TestBed.get(AanvraagService);
    expect(service).toBeTruthy();
  });
});
