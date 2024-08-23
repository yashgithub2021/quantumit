import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api/api.service';
import { CaseStudy, allCaseStudy } from '../casestudyhome/casestudy';

@Component({
  selector: 'app-keepitgoing',
  templateUrl: './keepitgoing.component.html',
  styleUrls: ['./keepitgoing.component.css'],
})
export class KeepitgoingComponent implements OnInit {
  isDarkTheme!: boolean;

  allCaseStudyNevigate: CaseStudy[] = allCaseStudy;
  nextProjectCount: number = 0;

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
