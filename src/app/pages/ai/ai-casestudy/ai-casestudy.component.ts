import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import AOS from 'aos';
import { ApiService } from 'src/app/shared/api/api.service';
import { DataService } from 'src/app/shared/api/data.service';

@Component({
  selector: 'app-ai-casestudy',
  templateUrl: './ai-casestudy.component.html',
  styleUrls: ['./ai-casestudy.component.css']
})
export class AiCasestudyComponent implements OnInit{

  isDarkTheme!: boolean;


  aiSolution:any[]=[
    {
      img:'../../../../assets/ai/casestudy/img1.png',
      title:'Read relevant documents',
      subTitle:'The RPA bots are designed to read and extract information from various documents required during the onboarding process.',
    },
    {
      img:'../../../../assets/ai/casestudy/img2.png',
      title:'Create Email accounts',
      subTitle:'RPA bots are programmed to automate the process of creating email accounts for new employees, ensuring a seamless and efficient setup.',
    },
    {
      img:'../../../../assets/ai/casestudy/img3.png',
      title:'Add employee to mailing',
      subTitle:'RPA bots are programmed to automate the process of adding new employees to relevant mailing lists, ensuring that they receive all necessary communications from the start.',
    },
    {
      img:'../../../../assets/ai/casestudy/img4.png',
      title:'list Generate Phone',
      subTitle:'RPA bots are programmed to automate the creation and updating of phone lists for new employees, ensuring accurate and up-to-date contact information.',
    },
    {
      img:'../../../../assets/ai/casestudy/img5.png',
      title:'Extension Request Card',
      subTitle:'RPA bots are programmed to automate the process of handling extension request cards for new employees, ensuring a streamlined and efficient workflow.',
    },
    {
      img:'../../../../assets/ai/casestudy/img6.png',
      title:'Create AD accounts',
      subTitle:'To automate the process of creating Active Directory (AD) accounts for new employees, ensuring quick and accurate setup.',
    },
    {
      img:'../../../../assets/ai/casestudy/img7.png',
      title:'Scrap employment details and push to system',
      subTitle:'To automate the extraction and integration of employment details from various sources, ensuring accurate and efficient data handling.',
    },
    {
      img:'../../../../assets/ai/casestudy/img8.png',
      title:'Send employment and login details to employee',
      subTitle:'To automate the process of sending employment and login details to new employees, ensuring timely and accurate communication.',
    },
  ];
  aiCaseStudy:any;

  constructor(private api: ApiService, private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    AOS.init({
      duration: 2000,
    });
    this.isDarkTheme = this.api.isDarkTheme();
    this.themechange();

    console.log(this.isDarkTheme);
    this.route.data.subscribe((data: any) => {
      this.aiCaseStudy = data.services.services;
      console.log(this.aiCaseStudy);
    });
  }
  themechange() {
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }
}
