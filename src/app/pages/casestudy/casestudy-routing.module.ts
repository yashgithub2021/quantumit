import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasestudyhomeComponent } from './casestudyhome/casestudyhome.component';

const routes: Routes = [
  {
    path:'',component:CasestudyhomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasestudyRoutingModule { }
