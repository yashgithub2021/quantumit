import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import AOS from 'aos';
import { ApiService } from 'src/app/shared/api/api.service';
import { Title, Meta } from '@angular/platform-browser';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isDarkTheme: boolean;
  showNavigationIndicators = false;

  dynamicTitle = 'Top Mobile & Web Development | AI Solutions | Digital Marketing Services';
  dynamicDescription = 'Leading AI & Digital Marketing Experts. Top Mobile & Web Development Solutions tailored for growth. Explore Quantum IT Innovation today!';

  constructor(private titleService: Title,
    private metaService: Meta,private api: ApiService, private elementRef: ElementRef) {
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
      img: '../../../assets/carousel/one.png'
    },
    {
      img: '../../../assets/carousel/two.png'
    },
    {
      img: '../../../assets/carousel/three.png'
    },
    {
      img: '../../../assets/carousel/four.png'
    },
    {
      img: '../../../assets/carousel/five.png'
    },
    {
      img: '../../../assets/carousel/six.png'
    },
    {
      img: '../../../assets/carousel/seven.png'
    },
  ]

  ourServices = [
    {
      img: '../../../assets/services-icons/Vector.svg',
      title: 'Web Development',
      desc: "Crafting engaging online experiences through bespoke web development solutions, tailored to elevate your brand's digital presence.",
      link:'/web-development'
    },
    {
      img: '../../../assets/services-icons/mobile.svg',
      title: 'Mobile App',
      desc: 'Transform your ideas into intuitive mobile experiences with our expert app development services, driving engagement and growth.',
      link:'/app-development'

    },
    {
      img: '../../../assets/services-icons/uiux.svg',
      title: 'Software Development',
      desc: 'Redefine your business landscape with our tailored software solutions, engineered for efficiency and scalability.',
      link:'/web-development'

    },
    {
      img: '../../../assets/services-icons/qa.svg',
      title: 'Social Media Optimization',
      desc: 'Enhance your online presence and interaction with our targeted social media optimization services, crafted for optimal impact and visibility.',
      link:'/digital-marketing'

    },
    {
      img: '../../../assets/services-icons/it-consultancy.svg',
      title: 'Artificial Intelligence',
      desc: 'Utilize our advanced artificial intelligence solutions, customized to meet your specific needs, to fuel innovation and streamline efficiency throughout your business processes.',
      link:'/artificial-intelligence'

    },
    {
      img: '../../../assets/services-icons/dedicated-team.svg',
      title: 'Digital Marketing',
      desc: "Boost your brand's online presence and reach with our effective digital marketing strategies, crafted to enhance visibility, engagement, and conversions.",
      link:'/digital-marketing'

    },
  ]

  sectionFourNums = [
    {
      num: "400+",
      heading: "ACTIVE CLIENTS",
      currentNum: 0
    },
    {
      num: "850 +",
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

  reviews: any
  groupedReviews!: any[][];

  ngOnInit(): void {

    this.titleService.setTitle(this.dynamicTitle);
    this.metaService.updateTag({ name: 'description', content: this.dynamicDescription });

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
