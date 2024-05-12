import { TestBed } from '@angular/core/testing';

import { WeatherappserviceService } from './weatherappservice.service';

describe('WeatherappserviceService', () => {
  let service: WeatherappserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherappserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
