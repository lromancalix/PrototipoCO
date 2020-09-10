import { TestBed } from '@angular/core/testing';

import { TarjetaCreditoService } from './tarjeta-credito.service';

describe('TarjetaCreditoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TarjetaCreditoService = TestBed.get(TarjetaCreditoService);
    expect(service).toBeTruthy();
  });
});
