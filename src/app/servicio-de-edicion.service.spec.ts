import { TestBed } from '@angular/core/testing';

import { ServicioDeEdicionService } from './servicio-de-edicion.service';

describe('ServicioDeEdicionService', () => {
  let service: ServicioDeEdicionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDeEdicionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
