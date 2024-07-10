import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-casestudy',
  templateUrl: './casestudy.component.html',
  styleUrls: ['./casestudy.component.css']
})
export class CasestudyComponent implements OnInit {

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
  nextProjectCount: number = 2;

  isDarkTheme!: boolean
  aiService = [
    {
      img: "../../../assets/ai/Frame1.png",
      title: "Search Engine Optimization (SEO)"
    },

    {
      img: "../../../assets/ai/Frame2.png",
      title: "Content Marketing"
    },

    {
      img: "../../../assets/ai/Frame3.png",
      title: "Pay-Per-Click (PPC) Advertising"
    },

    {
      img: "../../../assets/ai/Frame4.png",
      title: "Social Media Marketing (SMM)"
    },

    {
      img: "../../../assets/ai/Frame5.png",
      title: "Email Marketing"
    },

    {
      img: "../../../assets/ai/Frame6.png",
      title: "Affiliate Marketing"
    },

  ]

  sectionFourNums = [
    {
      num: "220+",
      heading: "Active Clients",
      currentNum: 0
    },
    {
      num: "850+",
      heading: "Projects done",
      currentNum: 0
    },
    {
      num: "250+",
      heading: "team advisors",
      currentNum: 0
    },
    {
      num: "10+",
      heading: "glorious years",
      currentNum: 0
    },

  ]
  constructor(private api: ApiService,private router:Router) { }


  ngOnInit(): void {
    this.isDarkTheme = this.api.isDarkTheme();
    this.themechange();
    this.sectionFourNums.forEach(item => {
      this.incrementNumber(item);
    });
    this.scrollToTop();
  }
  incrementNumber(item: any) {
    const targetNum = parseInt(item.num.replace('+', ''), 10);
    const stepTime = 40; // milliseconds
    const increment = Math.ceil(targetNum / 100) + 1; // Adjust as needed

    const interval = setInterval(() => {
      item.currentNum += increment;
      if (item.currentNum >= targetNum) {
        item.currentNum = targetNum;
        clearInterval(interval);
      }
    }, stepTime);
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
