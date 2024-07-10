import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { HdfcComponent } from './hdfc/hdfc.component';
import { RozorpayComponent } from './rozorpay/rozorpay.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HdfcComponent,
    RozorpayComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    ReactiveFormsModule
  ]
})
export class PaymentModule { }
