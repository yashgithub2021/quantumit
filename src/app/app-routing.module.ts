import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WebdevComponent } from './pages/web/webdev/webdev.component';
import { AiRobotComponent } from './components/ai-robot/ai-robot.component';
import { DigitalMarketingComponent } from './pages/digitalmarketing/digital-marketing/digital-marketing.component';
import { FormComponent } from './components/form/form.component';
import { MobileModule } from './pages/mobile/mobile.module';
import { DetailsComponent } from './components/details/details.component';
import { DataService } from './shared/api/data.service';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  
  { path: 'artificial-intelligence', component: AiRobotComponent },
  {
    path: 'web-development', loadChildren: () => import('./pages/web/web.module').then(m => m.WebModule)
  },
  {
    path: 'ai', loadChildren: () => import('./pages/ai/ai.module').then(m => m.AiModule)
  },
  {
    path: 'app-development', loadChildren: () => import('./pages/mobile/mobile.module').then(m => m.MobileModule)
  },
  {
    path: 'blog', loadChildren: () => import('./pages/blogs/blogs.module').then(m => m.BlogsModule)
  },
  {
    path: 'casestudy', loadChildren: () => import('./pages/casestudy/casestudy.module').then(m => m.CasestudyModule)
  },
  {
    path: 'digital-marketing', loadChildren: () => import('./pages/digitalmarketing/digitalmarketing.module').then(m => m.DigitalmarketingModule)
  },
  {
    path: 'company', loadChildren: () => import('./pages/company/company.module').then(m => m.CompanyModule)
  },
  {
    path: 'portfolio', loadChildren: () => import('./pages/portfolio/portfolio.module').then(m => m.PortfolioModule)
  },
  { path: 'form', component: FormComponent },
  
  { path:':id',component:DetailsComponent, resolve: {
    services: DataService 
  }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
