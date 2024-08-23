import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasestudyhomeComponent } from './casestudyhome/casestudyhome.component';
import { SeoplansComponent } from './seoplans/seoplans.component';
import { KeepitgoingComponent } from './keepitgoing/keepitgoing.component';
import { StringgeoComponent } from './stringgeo/stringgeo.component';
import { CitylandscapeComponent } from './citylandscape/citylandscape.component';

const routes: Routes = [
  {
    path: '',
    component: CasestudyhomeComponent,
  },
  {
    path: 'seoplans',
    component: SeoplansComponent,
  },
  {
    path: 'keepitgoing',
    component: KeepitgoingComponent,
  },
  {
    path: 'stringgeo',
    component: StringgeoComponent,
  },
  {
    path: 'citylandscape',
    component: CitylandscapeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasestudyRoutingModule {}
