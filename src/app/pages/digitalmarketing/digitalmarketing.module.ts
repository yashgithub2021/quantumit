import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigitalmarketingRoutingModule } from './digitalmarketing-routing.module';
import { ServicesComponent } from './services/services.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { FormComponent } from 'src/app/components/form/form.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { CasestudyComponent } from './casestudy/casestudy.component';
import { DetailsComponent } from './details/details.component';
import { HealthcareComponent } from './healthcare/healthcare.component';


@NgModule({
  declarations: [
    DigitalMarketingComponent,
    ServicesComponent,
    CasestudyComponent,
    DetailsComponent,
    HealthcareComponent,

  ],
  imports: [
    SharedModule,
    CommonModule,
    DigitalmarketingRoutingModule,
    FormComponent
  ]
})
export class DigitalmarketingModule { }
