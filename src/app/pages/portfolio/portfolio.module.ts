import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfoliohomeComponent } from './portfoliohome/portfoliohome.component';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [
    PortfoliohomeComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    NgxPaginationModule
  ]
})
export class PortfolioModule { }
