import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasestudyRoutingModule } from './casestudy-routing.module';
import { CasestudyhomeComponent } from './casestudyhome/casestudyhome.component';
import { SeoplansComponent } from './seoplans/seoplans.component';

@NgModule({
  declarations: [CasestudyhomeComponent, SeoplansComponent],
  imports: [CommonModule, CasestudyRoutingModule],
})
export class CasestudyModule {}
