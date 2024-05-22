import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-casestudy',
  templateUrl: './casestudy.component.html',
  styleUrls: ['./casestudy.component.css']
})
export class CasestudyComponent implements OnInit {
  isDarkTheme!: boolean

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
  constructor(private api: ApiService){

  }
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
