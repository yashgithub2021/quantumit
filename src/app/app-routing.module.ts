import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WebdevComponent } from './pages/web/webdev/webdev.component';
import { AiRobotComponent } from './components/ai-robot/ai-robot.component';
import { DigitalMarketingComponent } from './pages/digitalmarketing/digital-marketing/digital-marketing.component';
import { FormComponent } from './components/form/form.component';
import { MobileModule } from './pages/mobile/mobile.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'webdev', loadChildren: () => import('./pages/web/web.module').then(m => m.WebModule) },
  { path: 'aiRobot', component: AiRobotComponent },
  {
    path: 'mobileapp', loadChildren: () => import('./pages/mobile/mobile.module').then(m => m.MobileModule)
  },
  {
    path: 'blog', loadChildren: () => import('./pages/blogs/blogs.module').then(m => m.BlogsModule)
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
