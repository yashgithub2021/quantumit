import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path: '', component: DigitalMarketingComponent
  },
  {
    path: 'services', component: ServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigitalmarketingRoutingModule { }
