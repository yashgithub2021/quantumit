import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  RouteReuseStrategy,
  RouterModule,
  Routes,
} from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { DataService } from './shared/api/data.service';
import { HomeComponent } from './components/home/home.component';
import { RealEstateComponent } from './pages/real-estate/real-estate.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'real-estate-digital-marketing',
    component: RealEstateComponent,
  },
  {
    path: 'artificial-intelligence',
    loadComponent: () =>
      import('./components/ai-robot/ai-robot.component').then(
        (c) => c.AiRobotComponent
      ),
  },
  {
    path: 'web-development',
    loadChildren: () =>
      import('./pages/web/web.module').then((m) => m.WebModule),
  },
  {
    path: 'ai',
    loadChildren: () => import('./pages/ai/ai.module').then((m) => m.AiModule),
  },
  {
    path: 'app-development',
    loadChildren: () =>
      import('./pages/mobile/mobile.module').then((m) => m.MobileModule),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./pages/blogs/blogs.module').then((m) => m.BlogsModule),
  },
  {
    path: 'casestudy',
    loadChildren: () =>
      import('./pages/casestudy/casestudy.module').then(
        (m) => m.CasestudyModule
      ),
  },
  {
    path: 'digital-marketing',
    loadChildren: () =>
      import('./pages/digitalmarketing/digitalmarketing.module').then(
        (m) => m.DigitalmarketingModule
      ),
  },
  {
    path: 'company',
    loadChildren: () =>
      import('./pages/company/company.module').then((m) => m.CompanyModule),
  },
  {
    path: 'portfolio',
    loadChildren: () =>
      import('./pages/portfolio/portfolio.module').then(
        (m) => m.PortfolioModule
      ),
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('./pages/payment/payment.module').then((m) => m.PaymentModule),
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./components/form/form.component').then((f) => f.FormComponent),
  },

  {
    path: ':id',
    loadComponent: () =>
      import('./components/details/details.component').then(
        (m) => m.DetailsComponent
      ),
    resolve: {
      services: DataService,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
