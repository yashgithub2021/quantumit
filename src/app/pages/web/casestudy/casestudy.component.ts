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
      title: "Predictive Analysis"
    },

    {
      img: "../../../assets/ai/Frame2.png",
      title: "Data Engineers"
    },

    {
      img: "../../../assets/ai/Frame3.png",
      title: "Deep Learning"
    },

    {
      img: "../../../assets/ai/Frame4.png",
      title: "Healthcare"
    },

    {
      img: "../../../assets/ai/Frame5.png",
      title: "Data Mining"
    },

    {
      img: "../../../assets/ai/Frame6.png",
      title: "Statistical Modeling"
    },

  ]

  sectionFourNums = [
    {
      num: "330+",
      heading: "Active Clients"
    },
    {
      num: "850+",
      heading: "Projects done"
    },
    {
      num: "25+",
      heading: "team advisors"
    },
    {
      num: "10+",
      heading: "glorious years"
    },

  ]

  ngOnInit(): void {
    this.isDarkTheme = this.api.isDarkTheme();
    this.themechange()
  }

  themechange() {
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }
}
