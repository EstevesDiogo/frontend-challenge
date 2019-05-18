import { TestBed } from '@angular/core/testing';

import { ElementService } from './element.service';

describe('ElementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElementService = TestBed.get(ElementService);
    expect(service).toBeTruthy();
  });
});
