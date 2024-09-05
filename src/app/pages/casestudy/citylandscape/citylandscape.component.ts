import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api/api.service';
import { allCaseStudy, CaseStudy } from '../casestudyhome/casestudy';

@Component({
  selector: 'app-citylandscape',
  templateUrl: './citylandscape.component.html',
  styleUrls: ['./citylandscape.component.css'],
})
export class CitylandscapeComponent implements OnInit {
  isDarkTheme!: boolean;

  allCaseStudyNevigate: CaseStudy[] = allCaseStudy;
  nextProjectCount: number = 0;
  aiService = [
    {
      img: '../../../assets/ai/Frame1.png',
      title: 'Search Engine Optimization (SEO)',
    },

    {
      img: '../../../assets/ai/Frame2.png',
      title: 'Content Marketing',
    },

    {
      img: '../../../assets/ai/Frame3.png',
      title: 'Pay-Per-Click (PPC) Advertising',
    },

    {
      img: '../../../assets/ai/Frame4.png',
      title: 'Social Media Marketing (SMM)',
    },

    {
      img: '../../../assets/ai/Frame5.png',
      title: 'Email Marketing',
    },

    {
      img: '../../../assets/ai/Frame6.png',
      title: 'Affiliate Marketing',
    },
  ];

  sectionFourNums = [
    {
      num: '220+',
      heading: 'Active Clients',
      currentNum: 0,
    },
    {
      num: '850+',
      heading: 'Projects done',
      currentNum: 0,
    },
    {
      num: '250+',
      heading: 'team advisors',
      currentNum: 0,
    },
    {
      num: '10+',
      heading: 'glorious years',
      currentNum: 0,
    },
  ];
  constructor(private api: ApiService, private router: Router) {}
  ngOnInit(): void {
    this.isDarkTheme = this.api.isDarkTheme();
    this.themechange();
    this.sectionFourNums.forEach((item) => {
      this.incrementNumber(item);
    });
    this.scrollToTop();
  }
  themechange() {
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
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

  navigateToSpecificCaseStudy() {
    this.router.navigate([
      this.allCaseStudyNevigate[this.nextProjectCount].link,
    ]);
    this.scrollToTop();
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  next() {
    if (this.nextProjectCount == this.allCaseStudyNevigate.length - 1) {
      this.nextProjectCount = this.nextProjectCount;
    } else if (this.nextProjectCount <= this.allCaseStudyNevigate.length - 1) {
      this.nextProjectCount++;
      this.navigateToSpecificCaseStudy();
    }
  }
}
