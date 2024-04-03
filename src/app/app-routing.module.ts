import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WebdevComponent } from './components/webdev/webdev.component';
import { AiRobotComponent } from './components/ai-robot/ai-robot.component';
import { MobileappComponent } from './components/mobileapp/mobileapp.component';
import { DigitalMarketingComponent } from './components/digital-marketing/digital-marketing.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'webdev', component: WebdevComponent },
  { path: 'aiRobot', component: AiRobotComponent },
  { path: 'mobileapp', component: MobileappComponent },
  { path: 'digital-marketing', component: DigitalMarketingComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
