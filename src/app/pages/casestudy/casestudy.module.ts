import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasestudyRoutingModule } from './casestudy-routing.module';
import { CasestudyhomeComponent } from './casestudyhome/casestudyhome.component';
import { SeoplansComponent } from './seoplans/seoplans.component';
import { KeepitgoingComponent } from './keepitgoing/keepitgoing.component';
import { StringgeoComponent } from './stringgeo/stringgeo.component';
import { CitylandscapeComponent } from './citylandscape/citylandscape.component';

@NgModule({
  declarations: [
    CasestudyhomeComponent,
    SeoplansComponent,
    KeepitgoingComponent,
    StringgeoComponent,
    CitylandscapeComponent,
  ],
  imports: [CommonModule, CasestudyRoutingModule],
})
export class CasestudyModule {}
