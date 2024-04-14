import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { AboutComponent } from './about/about.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule
  ]
})
export class CompanyModule { }
