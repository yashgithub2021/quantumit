import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AiRoutingModule } from './ai-routing.module';
import { CasestudyComponent } from './casestudy/casestudy.component';
import { ServiceComponent } from './service/service.component';


@NgModule({
  declarations: [
    CasestudyComponent,
    ServiceComponent
  ],
  imports: [
    CommonModule,
    AiRoutingModule
  ],schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AiModule { }
