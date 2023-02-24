import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundtrackingComponent } from './fundtracking/fundtracking.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { L2firstpageComponent } from './l2firstpage/l2firstpage.component';
import { FeedToFFGEComponent } from './feed-to-ffge/feed-to-ffge.component';

const routes: Routes = [
  {path:'',redirectTo:'firstpage',pathMatch:'full'},
  {path:'fundtracking',component:FundtrackingComponent},
  {path:'l2firstpage',component:L2firstpageComponent},
  {path:'feed-to-ffge',component:FeedToFFGEComponent},
  {path:'**',component:FirstpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
