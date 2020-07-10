import { TestBed } from '@angular/core/testing';

import { RecentlyBoughtService } from './recently-bought.service';

describe('RecentlyBoughtService', () => {
  let service: RecentlyBoughtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentlyBoughtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
