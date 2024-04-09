import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileRoutingModule } from './mobile-routing.module';
import { MobileappComponent } from './mobileapp/mobileapp.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    MobileappComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    MobileRoutingModule,
    SharedModule
  ],
})
export class MobileModule { }
