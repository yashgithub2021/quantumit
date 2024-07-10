import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-casestudy',
  templateUrl: './casestudy.component.html',
  styleUrls: ['./casestudy.component.css']
})
export class CasestudyComponent implements OnInit {

  isDarkTheme!: boolean;


  allCaseStudyNevigate: any[] = [
    {
      name: "Mobile App Development",
      portfolioImage: '../../../../assets/casestudybanner/AMPSPORTFOLIO.webp',
      link: '/app-development/casestudy',
      projectName: 'AMPS'
    },
    {
      name: "Web App Development",
      portfolioImage: '../../../../assets/casestudybanner/WIKISTRINGS.png',
      link: '/web-development/casestudy',
      projectName: 'WikiString'
    },
    {
      name: "Digital Marketing",
      portfolioImage: '../../../../assets/casestudybanner/Seanautic.png',
      link: '/digital-marketing/casestudy',
      projectName: 'Seanautic marine Inc'
    },
    {
      name: "Artificial Intelligence",
      portfolioImage: '../../../../assets/casestudybanner/AI.png',
      link: '/ai/casestudy',
      projectName: 'Capsule Endoscopy'
    }
  ];
  nextProjectCount: number = 3;

  constructor(private api: ApiService,private router:Router) {
   }

  ngOnInit(): void {
    Aos.init({
      duration: 2000,
    })
    this.scrollToTop();
    this.isDarkTheme = this.api.isDarkTheme();
    this.themechange();
    this.scrollToTop();
  }

  themechange() {
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  navigateToSpecificCaseStudy(){
    this.router.navigate([this.allCaseStudyNevigate[this.nextProjectCount].link]);
    this.scrollToTop();
  }
  prev(){
    if(this.nextProjectCount==0){
      this.nextProjectCount=this.nextProjectCount;
    }

    else if(this.nextProjectCount>0 && this.nextProjectCount<=this.allCaseStudyNevigate.length-1){
      this.nextProjectCount--;
      this.navigateToSpecificCaseStudy();
    }
  }
  next(){
    if(this.nextProjectCount==this.allCaseStudyNevigate.length-1){
      this.nextProjectCount=this.nextProjectCount;
    }
    else if(this.nextProjectCount<=this.allCaseStudyNevigate.length-1){
      this.nextProjectCount++;
      this.navigateToSpecificCaseStudy();
    }
  }
}
