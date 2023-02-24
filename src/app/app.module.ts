import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FundtrackingComponent } from './fundtracking/fundtracking.component';
import { FirstpageComponent } from './firstpage/firstpage.component';

import { L2firstpageComponent } from './l2firstpage/l2firstpage.component';
import { FeedToFFGEComponent } from './feed-to-ffge/feed-to-ffge.component';

@NgModule({
  declarations: [
    AppComponent,
    FundtrackingComponent,
    FirstpageComponent,
    FeedToFFGEComponent,
    L2firstpageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
