import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { CasestudyComponent } from './casestudy/casestudy.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    CasestudyComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule
  ]
})
export class WebModule { }
