import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WebdevComponent } from './components/webdev/webdev.component';
import { AiRobotComponent } from './components/ai-robot/ai-robot.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'webdev', component: WebdevComponent },
  { path: 'aiRobot', component: AiRobotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
