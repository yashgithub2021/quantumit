import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AiRoutingModule } from './ai-routing.module';
import { CasestudyComponent } from './casestudy/casestudy.component';


@NgModule({
  declarations: [
    CasestudyComponent
  ],
  imports: [
    CommonModule,
    AiRoutingModule
  ]
})
export class AiModule { }
