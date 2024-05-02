import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { ServicesComponent } from './services/services.component';
import { CasestudyComponent } from './casestudy/casestudy.component';
import { DataService } from 'src/app/shared/api/data.service';

const routes: Routes = [
  {
    path: '', component: DigitalMarketingComponent
  },
  {
    path: 'services/:id', component: ServicesComponent, resolve: {
      services: DataService
    }
  },
  {
    path: 'casestudy', component: CasestudyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigitalmarketingRoutingModule { }
