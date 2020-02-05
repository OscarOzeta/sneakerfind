import { TestBed } from '@angular/core/testing';

import { SneakerdbService } from './sneakerdb.service';

describe('SneakerdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SneakerdbService = TestBed.get(SneakerdbService);
    expect(service).toBeTruthy();
  });
});
