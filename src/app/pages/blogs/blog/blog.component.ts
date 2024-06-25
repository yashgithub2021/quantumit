import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api/api.service';
import { TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [TitleCasePipe]
})
export class BlogComponent implements OnInit {

  isDarkTheme!: boolean;
  blogs: any
  contributors: any
  constructor(private api: ApiService, private titlecase: TitleCasePipe) { }

  ngOnInit(): void {
    this.isDarkTheme = this.api.isDarkTheme();
    this.fetchBlogs()
    this.fetchContributors()
    this.themechange()
  }

  themechange() {
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }

  fetchBlogs() {
    this.api.getBlogs()
      .subscribe((res: any) => {
        this.blogs = res.blogs
        console.log(this.blogs)
      })
  }

  fetchContributors() {
    this.api.getContributors()
      .subscribe((res: any) => {
        this.contributors = res.contributors
        console.log(this.contributors)
      })
  }
}
