import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasestudyRoutingModule } from './casestudy-routing.module';
import { CasestudyhomeComponent } from './casestudyhome/casestudyhome.component';


@NgModule({
  declarations: [
    CasestudyhomeComponent
  ],
  imports: [
    CommonModule,
    CasestudyRoutingModule
  ]
})
export class CasestudyModule { }
