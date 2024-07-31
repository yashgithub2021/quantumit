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

  pageSize: number = 4;
  currentPage: number = 1;
  totalItem!: number;
  loadingStatus: boolean = false;

  categories: any[] = []

  constructor(private api: ApiService, private titlecase: TitleCasePipe) { }

  ngOnInit(): void {
    this.isDarkTheme = this.api.isDarkTheme();
    this.fetchBlogs();
    this.getCategories();

    this.themechange();
    this.scrollToTop();
  }

  themechange() {
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }

  getCategories() {
    this.api.getCategoryOfBlogs().subscribe((data: any) => {
      this.categories = data.category
      console.log(data);
    })
  }
  getBlogsByCategoryName(name: string) {
    this.loadingStatus = true;
    this.api.getBlogsByCategory(name).subscribe((data: any) => {
      console.log(data);
      this.blogs = data.blogs
      this.totalItem = this.blogs.length;
      this.loadingStatus = false;
    }, err => {
      this.loadingStatus = false;
      console.log(err)
    })
  }


  fetchBlogs() {
    this.loadingStatus = true;
    this.api.getBlogs()
      .subscribe((res: any) => {
        this.blogs = res.blogs;
        this.blogs = this.blogs.map((blog: any) => {
          let tempElement = document.createElement('div');
          tempElement.innerHTML = blog.description.replace(/\\r\\n/g, '');
          return {
            ...blog,
            title1: blog.title.replace(/ /g, '-'),
            description: tempElement.textContent || tempElement.innerText || ''
          }
        })
        const uniqueCategories = new Set();

        this.totalItem = this.blogs.length;
        this.loadingStatus = false;
        console.log(this.blogs)
      }, err => {
        this.loadingStatus = false;
      })
  }
  pageChanged(currentPage: any) {
    // console.log(currentPage);
    this.currentPage = currentPage;
    this.scrollToContent();
  }
  scrollToContent(): void {
    const element = document.querySelector('.single-blog');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
