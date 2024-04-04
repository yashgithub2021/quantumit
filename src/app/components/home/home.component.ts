import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import AOS from 'aos';


const slideInAnimation = trigger('slideInAnimation', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)', opacity: 0 }),
    animate('2000ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
  ]),
  transition(':leave', [
    animate('2000ms ease-in', style({ transform: 'translateX(-100%)', opacity: 0 })),
  ]),
]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slideInAnimation]
})
export class HomeComponent implements AfterViewInit, OnInit {

  @ViewChild('leftSide') leftSide!: ElementRef;

  observer!: IntersectionObserver;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    AOS.init({
      duration: 2000,
    })
  }
  services = [
    {
      label: 'App Development',
      img: '../../../assets/appdev.png'
    },
    {
      label: 'Web   Development',
      img: '../../../assets/web dev.png'
    },
    {
      label: 'Digital Marketing',
      img: '../../../assets/dm.png'
    },
    {
      label: 'Artificial Intelligence',
      img: '../../../assets/ai.png'
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
      desc: 'We carry more than just good coding skills. Our experience makes us standout from other web development.'
    },
    {
      img: '../../../assets/services-icons/mobile.svg',
      title: 'Mobile Development',
      desc: 'Create complex enterprise software,ensure reliable software integration,modernise your legacy system.'
    },
    {
      img: '../../../assets/services-icons/uiux.svg',
      title: 'UI/UX Designing',
      desc: 'Build the product you need on timewith an experienced team that uses a clear and effective design process.'
    },
    {
      img: '../../../assets/services-icons/qa.svg',
      title: 'QA & Testing',
      desc: 'Turn to our experts to performcomprehensive, multi-stage testing and auditing of your software.'
    },
    {
      img: '../../../assets/services-icons/it-consultancy.svg',
      title: 'IT consultancy',
      desc: 'Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios.'
    },
    {
      img: '../../../assets/services-icons/dedicated-team.svg',
      title: 'Dedicated Team',
      desc: "Over the past decade, our customers succeeded by leveraging Intellect soft's process of building, motivating."
    },
  ]

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


  ngAfterViewInit() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.leftSide.nativeElement.classList.add('fade-in');
        } else {
          this.leftSide.nativeElement.classList.remove('fade-in');
        }
      });
    });

    this.observer.observe(this.leftSide.nativeElement);
  }
}
