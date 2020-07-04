import { TestBed } from '@angular/core/testing';

import { ProductNameNormalizer } from './product-name.normalizer';

describe('ProductNameNormalizerService', () => {
  let service: ProductNameNormalizer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductNameNormalizer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
