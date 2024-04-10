import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { InnerblogComponent } from './innerblog/innerblog.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'inner-blog', component: InnerblogComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
