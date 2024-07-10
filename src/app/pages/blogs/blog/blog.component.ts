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
  loadingStatus: boolean = true;

  categories: any[] = [
    { link: 'inner-blog/66795ec3a37d607032b766b5', name: 'App Development' },
    { link: 'inner-blog/667962640b494ad0884d5e05', name: 'Website Development' },
    { link: 'inner-blog/66795c8ea37d607032b766af', name: 'SEO' },
    { link: 'inner-blog/667968600b494ad0884d5e09', name: 'App Store Optimization' },
    { link: 'inner-blog/66795ec3a37d607032b766b5', name: 'Mobile App Development' },
    { link: 'inner-blog/6630bfb418c3b9df7378027a', name: 'Artificial Intelligence' },
    { link: 'inner-blog/66794424a37d607032b76653', name: 'Digital Marketing' },
    { link: 'inner-blog/6630bfb418c3b9df7378027a', name: 'ChatBot' },
    { link: 'inner-blog/66795c8ea37d607032b766af', name: 'ORM SEO' },
    { link: 'inner-blog/667962640b494ad0884d5e05', name: 'Web Development' },
    { link: 'inner-blog/66795c8ea37d607032b766af', name: 'Local SEO' },
    { link: 'inner-blog/66795ec3a37d607032b766b5', name: 'Geo Location Mobile App' },
    { link: 'inner-blog/66794424a37d607032b76653', name: 'Social Media Marketing' },
    { link: 'inner-blog/66795ec3a37d607032b766b5', name: 'Android App Development' },
    { link: 'inner-blog/66795ec3a37d607032b766b5', name: 'Mobile Application' },
  ]

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
        this.totalItem = this.blogs.length;
        this.loadingStatus = false;
        console.log(this.blogs)
      }, err => {
        this.loadingStatus = false;
      })
  }

  fetchContributors() {
    this.api.getContributors()
      .subscribe((res: any) => {
        this.contributors = res.contributors
        console.log(this.contributors)
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
}
