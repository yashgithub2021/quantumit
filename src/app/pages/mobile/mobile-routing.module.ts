import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileappComponent } from './mobileapp/mobileapp.component';
import { DetailsComponent } from './details/details.component';
import { CasestudyComponent } from './casestudy/casestudy.component';
import { AppDetailsComponent } from './app-details/app-details.component';

const routes: Routes = [
  { path: '', component: MobileappComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'casestudy', component: CasestudyComponent },
  { path: 'app-details/:id', component: AppDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule { }
