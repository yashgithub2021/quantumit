import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebdevComponent } from './webdev/webdev.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: WebdevComponent },
  { path: 'details', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
