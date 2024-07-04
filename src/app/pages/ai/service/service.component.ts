import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api/api.service';
import { DataService } from 'src/app/shared/api/data.service';
import AOS from 'aos';


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

  constructor(private api: ApiService, private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    AOS.init({
      duration: 2000,
    })
    this.isDarkTheme = this.api.isDarkTheme();
    this.themechange()
    this.route.data.subscribe((data: any) => {
      console.log(data.services.services)
      this.androidService = data.services.services
    });
    this.sectionFourNums.forEach(item => {
      this.incrementNumber(item);
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
