import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { CasestudyComponent } from './casestudy/casestudy.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from 'src/app/components/form/form.component';


@NgModule({
  declarations: [
    CasestudyComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    FormComponent
  ]
})
export class WebModule { }
