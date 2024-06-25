import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogComponent } from './blog/blog.component';
import { InnerblogComponent } from './innerblog/innerblog.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BlogComponent,
    InnerblogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BlogsRoutingModule,
    SharedModule
  ]
})
export class BlogsModule { }
