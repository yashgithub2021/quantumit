import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api/api.service';
import { DataService } from 'src/app/shared/api/data.service';
import AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';



@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  isDarkTheme!: boolean;
  service: any
  androidService!: any

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

  nextServiceCount:number=0;
  ourAIGenerative: any[] = [
    {
      img: '../../../assets/services/AI_service/aigenerator/img1.png',
      title: 'Generative AI Development',
      link: '/ai/Generative-Ai-Development'
    }, {
      img: '../../../assets/services/AI_service/aigenerator/img2.png',
      title: 'Generative AI integration services',
      link: '/ai/Generative-Ai-Integration-Services'
    }, {
      img: '../../../assets/services/AI_service/aigenerator/img3.png',
      title: 'Generative AI consulting company',
      link: '/ai/Generative-Ai-consulting-company'
    }
  ]


  constructor(private titleService: Title,
    private metaService: Meta, private api: ApiService,private router:Router, private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    AOS.init({
      duration: 2000,
    })
    this.isDarkTheme = this.api.isDarkTheme();
    this.themechange()
    this.getServiceDetails();
  }

  themechange() {
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }
  getServiceDetails(){
    this.route.data.subscribe((data: any) => {
      console.log(data.services.services)
      this.androidService = data.services.services;
    });
    this.sectionFourNums.forEach(item => {
      this.incrementNumber(item);
    });
    this.scrollToTop();

    this.titleService.setTitle(this.androidService.metaTitle || 'genai Companies | Generative ai Consulting | Artificial Intelligence Consultant');
    this.metaService.updateTag({ name: 'description', content: this.androidService.metaDescription || "Leading genai company offering generative AI consulting and artificial intelligence integration. Expert artificial intelligence consultants for innovative AI solutions." });
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

  prev(){
    if(this.nextServiceCount==0){
      this.nextServiceCount=0;
    }
    else if(this.nextServiceCount>0 && this.nextServiceCount<=this.ourAIGenerative.length-1){
      this.nextServiceCount--;
      this.router.navigate([`${this.ourAIGenerative[this.nextServiceCount].link}`]);
      this.getServiceDetails();
      this.scrollToTop();
    }
  }
  next(){
    if(this.nextServiceCount==this.ourAIGenerative.length-1){
      this.nextServiceCount=this.nextServiceCount;
    }
    else if(this.nextServiceCount<=this.ourAIGenerative.length-1){
      this.nextServiceCount++;
      this.router.navigate([`${this.ourAIGenerative[this.nextServiceCount].link}`]);
      this.getServiceDetails();
      this.scrollToTop();
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
