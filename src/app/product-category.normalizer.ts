import { Injectable } from '@angular/core';
import { Converter, Occ, Product } from '@spartacus/core';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryNormalizer implements Converter<Occ.Product, Product> {

  constructor() { }

  convert(source: Occ.Product, target?: any): any {
    if (source.categories && source.categories.length) {

      let twoCategories = '';
      for (const [index, category] of source.categories.entries()) {
        if (twoCategories) {
          twoCategories += '-';
        }
        twoCategories += category.name;
        if (index === 1) { break; }
      }

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
      target.twoCategories = twoCategories.replace(/ /g, '-').toLowerCase();
      target.manufacturer = source.manufacturer.toLowerCase();
    }
    return target;
  }
}
