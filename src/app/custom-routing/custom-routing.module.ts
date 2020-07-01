import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StaticPageComponent } from '../static-page/static-page.component';
import { CmsPageGuard, PageLayoutComponent } from '@spartacus/storefront';
import { SaleComponent } from '../sale/sale.component';

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
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(STATIC_ROUTES)
  ]
})
export class CustomRoutingModule { }
