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
  contributors: any;

  pageSize:number=4;
  currentPage:number=1;
  totalItem!:number;
  loadingStatus:boolean=true;

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
        this.blogs = res.blogs;
        this.totalItem=this.blogs.length;
        this.loadingStatus=false;
        console.log(this.blogs)
      },err=>{
        this.loadingStatus=false;
      })
  }

  fetchContributors() {
    this.api.getContributors()
      .subscribe((res: any) => {
        this.contributors = res.contributors
        console.log(this.contributors)
      })
  }
  pageChanged(currentPage:any){
    // console.log(currentPage);
    this.currentPage=currentPage;
    this.scrollToContent();
  }
  scrollToContent(): void {
    const element = document.querySelector('.single-blog');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
