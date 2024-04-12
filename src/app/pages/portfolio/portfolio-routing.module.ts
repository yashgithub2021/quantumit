import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfoliohomeComponent } from './portfoliohome/portfoliohome.component';

const routes: Routes = [
  {
    path: '', component: PortfoliohomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
