import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { CasestudyComponent } from './casestudy/casestudy.component';
import { DetailsComponent } from './details/details.component';
import { TruncateAtPointPipe } from 'src/app/shared/pipes/truncate-at-point.pipe';


@NgModule({
  declarations: [
    CasestudyComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    WebRoutingModule
  ]
})
export class WebModule { }
