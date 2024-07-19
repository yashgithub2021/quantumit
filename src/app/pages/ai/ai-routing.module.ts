import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasestudyComponent } from './casestudy/casestudy.component';
import { ServiceComponent } from './service/service.component';
import { DataService } from 'src/app/shared/api/data.service';
import { AiCasestudyComponent } from './ai-casestudy/ai-casestudy.component';

const routes: Routes = [
  {
    path: 'casestudy', component: CasestudyComponent
  },
  // {
  //   path: 'ai-casestudy', component: AiCasestudyComponent
  // },
  {
    path: ':id', component: ServiceComponent, resolve: {
      services: DataService // Provide the DataService resolver for the 'services' data
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiRoutingModule { }
