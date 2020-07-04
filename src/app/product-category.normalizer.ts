import { Injectable } from '@angular/core';
import { Converter, Occ, Product } from '@spartacus/core';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryNormalizer implements Converter<Occ.Product, Product> {

  constructor() { }

  convert(source: Occ.Product, target?: any): any {
    if (source.categories && source.categories.length) {

      let allCategories = '';
      for (const category of source.categories) {
        if (source.manufacturer !== category.name) {
          if (allCategories) {
            allCategories += '-';
          }
          allCategories += category.name;
        }
      }

      target.allCategories = allCategories.replace(/ /g, '-').toLowerCase();
      target.firstCategory = source.categories[0].name.replace(/ /g, '-').toLowerCase();
    }
    return target;
  }
}
