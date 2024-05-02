import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileappComponent } from './mobileapp/mobileapp.component';
import { DetailsComponent } from './details/details.component';
import { CasestudyComponent } from './casestudy/casestudy.component';
import { AppDetailsComponent } from './app-details/app-details.component';
import { DataService } from 'src/app/shared/api/data.service';

const routes: Routes = [
  { path: '', component: MobileappComponent },
  {
    path: 'details/:id', component: DetailsComponent, resolve: {
      services: DataService // Provide the DataService resolver for the 'services' data
    }
  },
  { path: 'casestudy', component: CasestudyComponent },
  { path: 'app-details/:id', component: AppDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule { }
