import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AiRoutingModule } from './ai-routing.module';
import { CasestudyComponent } from './casestudy/casestudy.component';
import { ServiceComponent } from './service/service.component';
import { AiCasestudyComponent } from './ai-casestudy/ai-casestudy.component';


@NgModule({
  declarations: [
    CasestudyComponent,
    ServiceComponent,
    AiCasestudyComponent
  ],
  imports: [
    CommonModule,
    AiRoutingModule
  ],schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AiModule { }
