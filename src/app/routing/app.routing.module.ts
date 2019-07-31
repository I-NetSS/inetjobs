import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponentProduct } from '../product/app.component.product';
import { SearchJobs } from '../searchJobs/app.component.search.jobs';
import { AppComponentLogin } from '../login/app.component.login';
import { AppComponentAboutUs } from '../aboutus/app.component.aboutus';
import { AppComponentContactUs } from '../contactus/app.component.contactus';
import { AppComponentServices } from '../services/app.component.services';

const routes: Routes = [
  {
    path: 'aboutus',
    component: AppComponentAboutUs
  },
  {
    path: 'product/create',
    component: AppComponentProduct
  },
  {
    path: 'services',
    component: AppComponentServices
  },
  {
    path: 'contactus',
    component: AppComponentContactUs
  },
  {
    path: 'login',
    component: AppComponentLogin
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }