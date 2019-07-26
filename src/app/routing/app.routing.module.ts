import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponentProduct } from '../product/app.component.product';
import { AppComponentProducts } from '../products/app.component.products';
import { SearchJobs } from '../searchJobs/app.component.search.jobs';

const routes: Routes = [
  {
    path: 'searchJobs',
    component: SearchJobs
  },
  {
    path: 'product/create',
    component: AppComponentProduct
  },
  {
    path: 'products',
    component: AppComponentProducts
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }