import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import AOS from 'aos';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-digital-marketing',
  templateUrl: './digital-marketing.component.html',
  styleUrls: ['./digital-marketing.component.css']
})
export class DigitalMarketingComponent implements OnInit, AfterViewInit {

  isDarkTheme!: boolean;

  constructor(private elementRef: ElementRef, private api: ApiService, private renderer: Renderer2) { }

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


  our_stories = [
    {
      name: " Online Plants NZ Organic Traffic",
      num: "+319k",
      types: ['Organic Engagement', 'SEO', 'Marketing'],
      href: 'https://liddlewonder.nz/'
    },
    {
      name: "Seanautic Marine Inc. Organic Traffic",
      num: "+34.7k",
      types: ['Keyword Ranking', 'SEO', 'Marketing'],
      link: '/digital-marketing/casestudy'
    },
    {
      name: "Diva Beauty Of Organic Traffic",
      num: "+991k",
      types: ['Keyword Ranking', 'SEO', 'Marketing'],
      href: 'https://flagbanner.com.au/'
    },
  ]

  tableData = [

    {
      img: "../../../assets/dm/table-img.svg",
      heading: "Search Engine",
      tail: "Optimization",
      desc: "SEO is the process of enhancing a website's visibility and ranking on <br> search engine results pages to increase organic traffic and improve <br> online presence.",
      link: "/seo-services-company"
    },
    {
      img: "../../../assets/dm/paid-search.svg",
      heading: "Paid Search",
      tail: "Marketing",
      desc: "Paid search marketing involves placing targeted ads on search engine <br> results pages to increase visibility and drive traffic to websites.",
      link: "services/paidSearch"
    },
    {
      img: "../../../assets/dm/conversion-rate.svg",
      heading: "Conversion Rate",
      tail: "Optimization",
      desc: "Conversion Rate Optimization (CRO) improves the percentage of <br> website visitors who take a desired action, ultimately increasing <br> the effectiveness of a website.",
      link: "services/conversionRateOptimization"
    },
    {
      img: "../../../assets/dm/social-media.svg",
      heading: "Social Media",
      tail: "Marketing",
      desc: "Social media marketing involves leveraging social platforms to connect <br> with audiences, build brand awareness, and drive engagement and sales.",
      list: ["Social Media Design", "Social Media Management", "Custom ad strategy", "Unique ads campaigns", "Advanced demographic <br> targeting"],
      link: "/social-media-marketing"
    },
    {
      img: "../../../assets/dm/email.svg",
      heading: "Email marketing",
      tail: "Solutions",
      desc: "Providing financial advice, including cost reduction strategies, financial <br> planning, and risk management.",
      link: "services/emailMarketing"
    },
    {
      img: "../../../assets/dm/ppc.svg",
      heading: "Pay-Per-Click (PPC)",
      tail: "Advertising",
      desc: "Pay-per-click (PPC) advertising enables businesses to display ads <br> on search engines and other platforms, paying only when users click <br> on their ads.",
      link: "/ppc-campaign-management-services"
    },
  ]

  ngOnInit(): void {
    this.isDarkTheme = this.api.isDarkTheme();
    AOS.init({
      duration: 2000,
    })
    this.themechange();
    this.scrollToTop();
  }

  ngAfterViewInit(): void {
    if (this.isMobileView()) {
      this.disableAOSOnMobile();
    }
  }

  isMobileView(): boolean {
    return window.innerWidth <= 768; // Define mobile width
  }

  disableAOSOnMobile(): void {
    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach((element) => {
      this.renderer.removeAttribute(element, 'data-aos');
    });
  }


  themechange() {
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToForm() {
    const footer = this.elementRef.nativeElement.querySelector('#form');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }
  scrollToProcess() {
    const footer = this.elementRef.nativeElement.querySelector('#our-process');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }
}
