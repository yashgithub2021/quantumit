import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-innerblog',
  templateUrl: './innerblog.component.html',
  styleUrls: ['./innerblog.component.css']
})
export class InnerblogComponent implements OnInit {

  blogDetail!: any
  blogId: any;
  blogTitle:any;
  isDarkTheme!: boolean;
  nextBlogCount!: number;
  blogs!: any;
  loadingStatus: boolean = true;

  constructor(private api: ApiService, private active: ActivatedRoute,private router:Router) { }

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
    this.api.getBlogs().subscribe((res: any) => {
      this.blogs = res.blogs;
      console.log(this.blogs);
      this.getBlogId();
    })
    this.themechange();
    this.scrollToTop();
  }

  themechange() {
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }
  fetchBlogIndex() {
    const index = this.blogs.findIndex((object:any) => object.id == this.blogId);

    if (index !== -1) {
      this.nextBlogCount = index;
      console.log(this.nextBlogCount);
    } else {
      console.log('Object not found in the array');
    }
  }
  fetchBlogs() {
    this.api.getBlogs().subscribe((res: any) => {
      this.blogs = res.blogs;
      console.log(this.blogs);
      this.fetchBlogIndex();
    }, err => {

    })
  }
  getBlogId() {
    this.active.paramMap.subscribe((res: any) => {
      // this.blogId = res.get('id');
      this.blogTitle = res.get('id');//here id as and blog title
      this.blogTitle=this.blogTitle.replace(/-/g,' ');
      console.log(this.blogTitle);
      this.blogId=this.blogs.filter((blog:any)=>blog.title ==this.blogTitle)[0].id;
      console.log(this.blogId);
      this.fetchBlogDetail();
      this.fetchBlogs();
    });
  }
  fetchBlogDetail() {

    this.api.getBlogDetails(this.blogId).subscribe((res: any) => {
      this.blogDetail = res.blogs
      console.log(this.blogDetail)
      this.modifyQuote();
      this.loadingStatus = false;
    }, err => {
      this.loadingStatus = false;
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
  findIdOfBlog(index:number){
    this.blogTitle=this.blogs[index].title;
    this.blogTitle=this.blogTitle.replace(/ /g,'-');
    this.router.navigate(['/blog/inner-blog', this.blogTitle]);
  }

  next() {
    if(this.nextBlogCount==this.blogs.length-1){
      this.nextBlogCount=this.nextBlogCount;
    }
    else if(this.nextBlogCount<=this.blogs.length-1){
      this.nextBlogCount++;
      this.findIdOfBlog(this.nextBlogCount);
      this.fetchBlogDetail();
      this.scrollToTop();
    }
  } 
  prev() {
    if(this.nextBlogCount==0){
      this.nextBlogCount=this.blogs;
    }
    else if(this.nextBlogCount>0 && this.nextBlogCount<=this.blogs.length-1){
      this.nextBlogCount--;
      this.findIdOfBlog(this.nextBlogCount);
      this.fetchBlogDetail();
      this.scrollToTop();
    }
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
