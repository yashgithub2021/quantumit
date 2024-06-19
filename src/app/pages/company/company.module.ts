import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { AboutComponent } from './about/about.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ContactComponent } from './contact/contact.component';
import { RefundCancellationPolicyComponent } from './refund-cancellation-policy/refund-cancellation-policy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';


@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    RefundCancellationPolicyComponent,
    PrivacyPolicyComponent,
    TermsConditionComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule
  ]
})
export class CompanyModule { }
