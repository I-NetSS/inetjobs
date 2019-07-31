import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app.routing.module';
import { AppComponent } from './app.component';
import { AppComponentProduct} from './product/app.component.product';
import { ReactiveFormsModule } from '@angular/forms';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { SearchJobs } from './searchJobs/app.component.search.jobs';
import { AppComponentLogin } from './login/app.component.login';
import { AppComponentAboutUs } from './aboutus/app.component.aboutus';
import { AppComponentContactUs } from './contactus/app.component.contactus';
import { AppComponentServices } from './services/app.component.services';

@NgModule({
  declarations: [
	AppComponentProduct,
	AppComponentServices,
	AppComponent,
	SearchJobs,
	AppComponentLogin,
	AppComponentAboutUs,
	AppComponentContactUs
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	ReactiveFormsModule,
	SlimLoadingBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
