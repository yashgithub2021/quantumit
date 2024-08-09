import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/shared/api/api.service';
declare var $: any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {
  constructor(private api: ApiService) { }
  members: any
  isDarkTheme!: boolean
  list2 = ["Innovation: Using latest technologies and creative approaches.", "Collaboration: Working closely with clients to address their needs.", "Excellence: In the quality of our work and the level of service we give."]

  partners = [
    {
      title: "Technology",
      img: "../../../../assets/about/partner1.svg",
      name: "Volo Digital Agency",
      height: "50",
      width: "100"
    },
    {
      title: "Design",
      img: "../../../../assets/about/partner2.svg",
      name: "ZurMarke Studi",
      height: "60",
      width: "140"
    },
    {
      title: "Consulting",
      img: "../../../../assets/about/partner3.svg",
      name: "Pathpoint Consulting",
      height: "60",
      width: "180"
    },
    {
      title: "Web Design",
      img: "../../../../assets/about/5.png.png",
      name: "Tourism",
      height: "50",
      width: "120"
    },
  ]
  sectionFourNums = [
    {
      num: "10 years",
      heading: "In Business"
    },
    {
      num: "1000+",
      heading: "Customers"
    },
    {
      num: "10k+",
      heading: "Monthly Blog Readers"
    },
    {
      num: "1.2m+",
      heading: "social followers"
    },
  ]
  sectionFourNums1 = [
    {
      num: "850 +",
      heading: "Projects done",
      currentNum: 0
    },
    {
      num: "400+",
      heading: "ACTIVE CLIENTS",
      currentNum: 0
    },
    {
      num: "10+",
      heading: "glorious years",
      currentNum: 0
    },
    {
      num: "250+",
      heading: "team advisors",
      currentNum: 0
    },

  ]

  carouselItems = [
    {
      link: 'https://www.crunchbase.com/organization/quantum-it-innovation',
      imgSrc: '../../../../assets/about/crunch.png',
      title: 'Crunchbase',
      description: 'Top Mobile App Development'
    },
    {
      link: 'https://www.goodfirms.co/company/quantum-it-innovation',
      imgSrc: '../../../../assets/about/award2.png',
      title: 'Good Firms Award',
      description: 'Top Mobile App Developers'
    },
    {
      link: 'https://upcity.com/local-marketing-agencies/profiles/quantum-it-innovation',
      imgSrc: '../../../../assets/about/upcity.jpg',
      title: 'Up City',
      description: 'Site Of the Month'
    },
    {
      link: 'https://www.yelp.com/biz/quantum-it-innovation-westfield',
      imgSrc: '../../../../assets/about/yelp.png',
      title: 'Yelp',
      description: 'Certified Mobile App Developer'
    },
    {
      link: 'https://clutch.co/profile/quantum-it-innovation-0',
      imgSrc: '../../../../assets/about/clutch.jpg',
      title: 'Clutch',
      description: 'Certified Mobile App Developer'
    },
    {
      link: 'https://www.trustpilot.com/review/quantumitinnovation.com',
      imgSrc: '../../../../assets/about/topseo.webp',
      title: 'Trustpilot',
      description: 'See our Profile'
    },
    {
      link: 'https://www.glassdoor.co.in/Reviews/Quantum-IT-Innovation-Reviews-E2166781.htm',
      imgSrc: '../../../../assets/about/glassdoor.webp',
      title: 'Glassdoor',
      description: 'See our Profile'
    },
    {
      link: 'https://www.topseobrands.com/profile/quantum-it-innovation-0',
      imgSrc: '../../../../assets/about/trust.webp',
      title: 'Top SEO Brands',
      description: 'See our Profile'
    }
  ];
  @ViewChild('carousel', { static: false }) _carousel!: ElementRef;
  ngAfterViewInit(): void {
    const myCarousel = this._carousel.nativeElement;
    const carousel = $(myCarousel).carousel();
  }

  ngOnInit(): void {
    this.getMembers()
    this.isDarkTheme = this.api.isDarkTheme();
    this.themechange();
    this.sectionFourNums1.forEach(item => {
      this.incrementNumber(item);
    })
  }

  getMembers() {
    this.api.getMembers().subscribe((res) => {
      this.members = res
      console.log(this.members.members)
    })
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
}
