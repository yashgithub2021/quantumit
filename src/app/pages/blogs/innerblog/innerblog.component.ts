import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-innerblog',
  templateUrl: './innerblog.component.html',
  styleUrls: ['./innerblog.component.css']
})
export class InnerblogComponent implements OnInit {

  blogDetail!: any
  blogId: any
  isDarkTheme!: boolean;
  nextBlogCount!:number;
  blogs!:any;
  loadingStatus:boolean=true;

  constructor(private api: ApiService, private active: ActivatedRoute) { }

  checks = ["Listen to what they say about you", "Randomised words which don't look even slightly believable.", "Lorem Ipsum generators on the Internet tend to repeat predefined chunks", "Automate multiple scenarios and eliminate tedious tasks. "]
  sectionFourNums = [
    {
      num: "330 +",
      heading: "ACTIVE CLIENTS"
    },
    {
      num: "850 +",
      heading: "Projects done"
    },
    {
      num: "25 +",
      heading: "team advisors"
    },
    {
      num: "10 +",
      heading: "glorious years"
    },
  ]

  ngOnInit(): void {
    this.isDarkTheme = this.api.isDarkTheme();
    this.getBlogId();
    this.themechange();
    this.fetchBlogs();
  }

  themechange() {
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }
  // fetchBlogIndex(){
  //   this.nextBlogCount=this.blogs.
  // }
  fetchBlogs() {
    this.api.getBlogs().subscribe((res: any) => {
      this.blogs=res;
      console.log(this.blogs);
    },err => {

    })
  }
  getBlogId(){
    this.active.paramMap.subscribe((res: any) => {
      this.blogId = res.get('id');
      this.fetchBlogDetail();
    });
  }
  fetchBlogDetail() {

    this.api.getBlogDetails(this.blogId).subscribe((res: any) => {
      this.blogDetail = res.blogs
      console.log(this.blogDetail)
      this.modifyQuote();
      this.loadingStatus=false;
    },err=>{
      this.loadingStatus=false;
    })

  }

  modifyQuote() {
    if (this.blogDetail && this.blogDetail.quote) {
      // Extract the first letter of the first word
      const firstLetter = this.blogDetail.quote.charAt(0);
      // Replace the first word with the first letter wrapped in a span element
      this.blogDetail.quote = `<span class="first-letter fw-bold fs-1">${firstLetter}</span>${this.blogDetail.quote.slice(1)}`;
    }
  }

  next(){

  }
  prev(){

  }
}
