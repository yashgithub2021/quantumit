import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import AOS from 'aos';
import { ApiService } from 'src/app/shared/api/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isDarkTheme: boolean;
  showNavigationIndicators = false;


  constructor(private api: ApiService, private elementRef: ElementRef) {
    this.isDarkTheme = this.api.isDarkTheme();
  }

  services = [
    {
      label: 'App Development',
      img: '../../../assets/appdev.png',
      link: 'app-development'
    },
    {
      label: 'Web   Development',
      img: '../../../assets/web dev.png',
      link: 'web-development'
    },
    {
      label: 'Digital Marketing',
      img: '../../../assets/dm.png',
      link: 'digital-marketing'
    },
    {
      label: 'Artificial Intelligence (AI)',
      img: '../../../assets/ai.png',
      link: 'artificial-intelligence'
    },
  ]

  brandLogo = [
    {
      img: '../../../assets/carousel/one.svg'
    },
    {
      img: '../../../assets/carousel/two.svg'
    },
    {
      img: '../../../assets/carousel/three.svg'
    },
    {
      img: '../../../assets/carousel/4.png.svg'
    },
    {
      img: '../../../assets/carousel/one.svg'
    },
    {
      img: '../../../assets/carousel/5.png.svg'
    },
    {
      img: '../../../assets/carousel/6.png.svg'
    },
  ]

  ourServices = [
    {
      img: '../../../assets/services-icons/Vector.svg',
      title: 'Web Development',
      desc: "Crafting engaging online experiences through bespoke web development solutions, tailored to elevate your brand's digital presence."
    },
    {
      img: '../../../assets/services-icons/mobile.svg',
      title: 'Mobile App',
      desc: 'Transform your ideas into intuitive mobile experiences with our expert app development services, driving engagement and growth.'
    },
    {
      img: '../../../assets/services-icons/uiux.svg',
      title: 'Software Development',
      desc: 'Redefine your business landscape with our tailored software solutions, engineered for efficiency and scalability.'
    },
    {
      img: '../../../assets/services-icons/qa.svg',
      title: 'Social Media Optimization',
      desc: 'Enhance your online presence and interaction with our targeted social media optimization services, crafted for optimal impact and visibility.'
    },
    {
      img: '../../../assets/services-icons/it-consultancy.svg',
      title: 'Artificial Intelligence',
      desc: 'Utilize our advanced artificial intelligence solutions, customized to meet your specific needs, to fuel innovation and streamline efficiency throughout your business processes.'
    },
    {
      img: '../../../assets/services-icons/dedicated-team.svg',
      title: 'Digital Marketing',
      desc: "Boost your brand's online presence and reach with our effective digital marketing strategies, crafted to enhance visibility, engagement, and conversions."
    },
  ]

  sectionFourNums = [
    {
      num: "250+",
      heading: "ACTIVE CLIENTS",
      currentNum: 0
    },
    {
      num: "850 +",
      heading: "Projects done",
      currentNum: 0
    },
    {
      num: "25+",
      heading: "team advisors",
      currentNum: 0
    },
    {
      num: "10+",
      heading: "glorious years",
      currentNum: 0
    },
  ]

  reviews: any
  groupedReviews!: any[][];

  ngOnInit(): void {
    AOS.init({
      duration: 2000,
    })
    this.fetchReviews()
    this.isDarkTheme = this.api.isDarkTheme();
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
      // Perform actions based on theme change
    });
    this.sectionFourNums.forEach(item => {
      this.incrementNumber(item);
    })
  }

  fetchReviews(): void {
    this.api.getReviews().subscribe(
      (res: any) => {
        this.reviews = res.feedbacks;
        this.groupReviews();
        console.log(res);
        console.log(this.reviews);
      },
      err => {
        console.log(err);
      }
    );
  }

  groupReviews(): void {
    const groupedReviews = [];
    const screenWidth = window.innerWidth;

    if (screenWidth < 1024) {
      // Mobile view: one review per slide
      for (let i = 0; i < this.reviews.length; i++) {
        groupedReviews.push([this.reviews[i]]);
      }
    } else {
      // Desktop view: two reviews per slide
      for (let i = 0; i < this.reviews.length; i += 2) {
        groupedReviews.push(this.reviews.slice(i, i + 2));
      }
    }

    this.groupedReviews = groupedReviews;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.groupReviews();
  }


  // Inside your component class
  getStars(rating: number): number[] {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(i);
    }
    return stars;
  }
  scrollToFooter() {
    const footer = this.elementRef.nativeElement.querySelector('#form');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }
  scrollToGetStarted() {
    const footer = this.elementRef.nativeElement.querySelector('#get-started');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }
  scrollToGetServices() {
    const footer = this.elementRef.nativeElement.querySelector('#services');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }
  scrollToCustomers() {
    const footer = this.elementRef.nativeElement.querySelector('#customers');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
