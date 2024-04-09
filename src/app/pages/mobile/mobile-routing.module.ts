import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileappComponent } from './mobileapp/mobileapp.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: MobileappComponent },
  { path: 'details', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule { }
