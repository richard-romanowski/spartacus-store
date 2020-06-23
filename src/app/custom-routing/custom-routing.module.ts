import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StaticPageComponent } from '../static-page/static-page.component';

const STATIC_ROUTES: Routes = [
{path: 'static-page', component: StaticPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(STATIC_ROUTES)
  ]
})
export class CustomRoutingModule { }
