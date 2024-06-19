import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RefundCancellationPolicyComponent } from './refund-cancellation-policy/refund-cancellation-policy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';

const routes: Routes = [
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'refund-cancellation-policy', component: RefundCancellationPolicyComponent
  },
  {
    path:'privacy-policy',component:PrivacyPolicyComponent
  },
  {
    path:'terms-and-condition',component:TermsConditionComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
