import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasestudyhomeComponent } from './casestudyhome/casestudyhome.component';
import { SeoplansComponent } from './seoplans/seoplans.component';

const routes: Routes = [
  {
    path: '',
    component: CasestudyhomeComponent,
  },
  {
    path: 'seoplans',
    component: SeoplansComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasestudyRoutingModule {}
