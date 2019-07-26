import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app.routing.module';
import { AppComponent } from './app.component';
import { AppComponentProduct} from './product/app.component.product';
import { AppComponentProducts} from './products/app.component.products';
import { ReactiveFormsModule } from '@angular/forms';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { SearchJobs } from './searchJobs/app.component.search.jobs';

@NgModule({
  declarations: [
	AppComponentProduct,
	AppComponentProducts,
	AppComponent,
	SearchJobs
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
