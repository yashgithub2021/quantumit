import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  isDarkTheme!: boolean;

  constructor(private api: ApiService) { }


  aiService = [
    {
      num: "01.",
      title: "Mobile App Strategy",
      desc: "Our mobile app strategy integrates market research, user-centric design, and agile development to create impactful apps aligned with your business goals.",
      img: '../../../../assets/mobile/service/service-icon1.svg'
    },

    {
      num: "02.",
      title: "Mobile App Design",
      desc: "Mobile app design focuses on creating intuitive, visually appealing interfaces optimized for seamless user experiences on smartphones and tablets.",
      img: '../../../../assets/mobile/service/md.svg'
    },

    {
      num: "03.",
      title: "Mobile App Development",
      desc: "Mobile app development involves designing, building, and launching applications tailored for use on smartphones and tablets across various platforms.",
      img: '../../../../assets/mobile/service/mad.svg'
    },

    {
      num: "04.",
      title: "Mobile App Testing",
      desc: "Mobile app testing ensures the functionality, usability, and performance of applications across different devices and platforms to deliver a seamless user experience.",
      img: '../../../../assets/mobile/service/mat.svg'
    },

    {
      num: "05.",
      title: "Enterprise Mobile App",
      desc: "Enterprise mobile apps are designed to address the specific needs and workflows of large organizations, enhancing productivity and efficiency in the workplace.",
      img: '../../../../assets/mobile/service/ema.svg'
    },

    {
      num: "06.",
      title: "Mobile Game Development",
      desc: "Mobile game development involves creating interactive and engaging gaming experiences optimized for smartphones and tablets, catering to a diverse audience of gamers.",
      img: '../../../../assets/mobile/service/mgd.svg'
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
