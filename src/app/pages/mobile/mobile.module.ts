import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileRoutingModule } from './mobile-routing.module';
import { MobileappComponent } from './mobileapp/mobileapp.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { DetailsComponent } from './details/details.component';
import { CasestudyComponent } from './casestudy/casestudy.component';
import { AppDetailsComponent } from './app-details/app-details.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TruncateAtPointPipe } from './pipes/truncate-at-point.pipe';


@NgModule({
  declarations: [
    MobileappComponent,
    DetailsComponent,
    CasestudyComponent,
    AppDetailsComponent,
    TruncateAtPointPipe,
  ],
  imports: [
    CommonModule,
    MobileRoutingModule,
    SharedModule,
    NgxSpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MobileModule { }
