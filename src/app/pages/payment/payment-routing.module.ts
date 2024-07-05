import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HdfcComponent } from './hdfc/hdfc.component';
import { RozorpayComponent } from './rozorpay/rozorpay.component';

const routes: Routes = [
  {
    path: 'hdfc', component: HdfcComponent
  },
  {
    path: 'rozorpay', component: RozorpayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
