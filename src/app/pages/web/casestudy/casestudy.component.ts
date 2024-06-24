import { Component } from '@angular/core';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-casestudy',
  templateUrl: './casestudy.component.html',
  styleUrls: ['./casestudy.component.css']
})
export class CasestudyComponent {
  isDarkTheme!: boolean
  constructor(private api: ApiService) { }
  aiService = [
    {
      img: "../../../assets/ai/Frame1.png",
      title: "User Experience (UX)"
    },

    {
      img: "../../../assets/ai/Frame2.png",
      title: "Functionality"
    },

    {
      img: "../../../assets/ai/Frame3.png",
      title: "Performance"
    },

    {
      img: "../../../assets/ai/Frame4.png",
      title: "Security"
    },

    {
      img: "../../../assets/ai/Frame5.png",
      title: "Deployment"
    },

    {
      img: "../../../assets/ai/Frame6.png",
      title: "Maintenance"
    },{
      img: "../../../assets/ai/Frame6.png",
      title: "Optimization"
    },{
      img: "../../../assets/ai/Frame6.png",
      title: "Testing"
    },{
      img: "../../../assets/ai/Frame6.png",
      title: "User Adoption"
    },

  ]

  sectionFourNums = [
    {
      num: "220+",
      heading: "Active Clients",
      currentNum:0
    },
    {
      num: "850+",
      heading: "Projects done",
      currentNum:0
    },
    {
      num: "25+",
      heading: "team advisors",
      currentNum:0
    },
    {
      num: "10+",
      heading: "glorious years",
      currentNum:0
    },

  ]

  ngOnInit(): void {
    this.isDarkTheme = this.api.isDarkTheme();
    this.themechange();
    this.sectionFourNums.forEach(item => {
      this.incrementNumber(item);
    });
  }
  incrementNumber(item:any) {
    const targetNum = parseInt(item.num.replace('+', ''), 10);
    const stepTime = 40; // milliseconds
    const increment = Math.ceil(targetNum / 100)+1; // Adjust as needed

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
}
