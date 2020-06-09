import { TestBed } from '@angular/core/testing';

import { Ecommerce.ServiceService } from './ecommerce.service.service';

describe('Ecommerce.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ecommerce.ServiceService = TestBed.get(Ecommerce.ServiceService);
    expect(service).toBeTruthy();
  });
});
