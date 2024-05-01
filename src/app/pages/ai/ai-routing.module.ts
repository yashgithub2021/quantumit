import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasestudyComponent } from './casestudy/casestudy.component';

const routes: Routes = [
  {
    path: 'casestudy', component: CasestudyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiRoutingModule { }
