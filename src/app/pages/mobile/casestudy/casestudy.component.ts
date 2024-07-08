import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-casestudy',
  templateUrl: './casestudy.component.html',
  styleUrls: ['./casestudy.component.css']
})
export class CasestudyComponent implements OnInit {
  isDarkTheme!: boolean

  allCaseStudyNevigate:any[]=[
    {
      name: "Mobile App Development",
      portfolioImage: '../../../../assets/casestudybanner/AMPSPORTFOLIO.webp',
      link: '/app-development/casestudy',
      projectName:'AMPS'
    },
    {
      name: "Web App Development",
      portfolioImage: '../../../../assets/casestudybanner/WIKISTRINGS.png',
      link: '/web-development/casestudy',
      projectName:'WikiString'
    },
    {
      name: "Digital Marketing",
      portfolioImage: '../../../../assets/casestudybanner/Seanautic.png',
      link: '/digital-marketing/casestudy',
      projectName:'Seanautic marine Inc'
    },
    {
      name: "Artificial Intelligence",
      portfolioImage: '../../../../assets/casestudybanner/AI.png',
      link: '/ai/casestudy',
      projectName:'Capsule Endoscopy'
    }
  ];
  nextProjectCount:number=0;

  sectionFourNums = [
    {
      num: "220+",
      heading: "Active Clients",
      currentNum:0
    },
    {
      num: "850+",
      heading: "Projects done",
      currentNum:0
    },
    {
      num: "250+",
      heading: "team advisors",
      currentNum:0
    },
    {
      num: "10+",
      heading: "glorious years",
      currentNum:0
    },

  ]
  constructor(private api: ApiService,private router:Router){

  }
  ngOnInit(): void {
    this.isDarkTheme = this.api.isDarkTheme();
    this.themechange();
    this.sectionFourNums.forEach(item => {
      this.incrementNumber(item);
    });
    this.scrollToTop();

  }
  themechange() {
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }
  incrementNumber(item:any) {
    const targetNum = parseInt(item.num.replace('+', ''), 10);
    const stepTime = 40; // milliseconds
    const increment = Math.ceil(targetNum / 100)+1; // Adjust as needed

    const interval = setInterval(() => {
      item.currentNum += increment;
      if (item.currentNum >= targetNum) {
        item.currentNum = targetNum;
        clearInterval(interval);
      }
    }, stepTime);
  }

  navigateToSpecificCaseStudy(){
    this.router.navigate([this.allCaseStudyNevigate[this.nextProjectCount].link]);
    this.scrollToTop();
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
