import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebdevComponent } from './webdev/webdev.component';
import { DetailsComponent } from './details/details.component';
import { CasestudyComponent } from './casestudy/casestudy.component';

const routes: Routes = [
  { path: '', component: WebdevComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'casestudy', component: CasestudyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
