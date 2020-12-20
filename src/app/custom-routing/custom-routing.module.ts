import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StaticPageComponent } from '../static-page/static-page.component';
import { CmsPageGuard, PageLayoutComponent } from '@spartacus/storefront';
import { SaleComponent } from '../sale/sale.component';
import { ConfigModule, RoutingConfig, OccConfig } from '@spartacus/core';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { RecentlyBoughtComponent } from '../recently-bought/recently-bought.component';

const STATIC_ROUTES: Routes = [
  {
    path: 'static-page',
    component: StaticPageComponent,
    data: { pageLabel: 'cart' },
    canActivate: [CmsPageGuard]
  },
  {
    path: 'alias/hilfe',
    component: PageLayoutComponent,
    data: { pageLabel: '/faq' },
    canActivate: [CmsPageGuard]
  },
  {
    path: 'sale',
    component: SaleComponent,
    data: { pageLabel: '/sale' },
    canActivate: [CmsPageGuard]
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { pageLabel: '/contact' },
    canActivate: [CmsPageGuard]
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { pageLabel: '/faq' },
    canActivate: [CmsPageGuard]
  },
  {
    path: 'recently-bought',
    component: RecentlyBoughtComponent,
    canActivate: [CmsPageGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(STATIC_ROUTES),
    ConfigModule.withConfig({
      routing: {
        routes: {
          product: {
            paramsMapping: { uglyName: 'name' },
            paths: ['prod/:productCode/cool/:uglyName', 'p/:productCode/:uglyName', 'prod/:productCode']
          }
        }
      }
    } as RoutingConfig),
    ConfigModule.withConfig({
      backend: {
        occ: {
          endpoints: {
            // tslint:disable:max-line-length
            productSearch: 'products/search?fields=products(code,name,categories,manufacturer,summary,price(FULL),images(DEFAULT),stock(FULL),averageRating,variantOptions),facets,breadcrumbs,pagination(DEFAULT),sorts(DEFAULT),freeTextSearch,currentQuery',
            product: {
              list: 'products/${productCode}?fields=FULL',
            }
          },
        },
      },
    } as OccConfig)
  ]
})
export class CustomRoutingModule { }
