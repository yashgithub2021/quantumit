import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(private api: ApiService) { }
  members: any
  isDarkTheme!: boolean
  list2 = ["Innovation: Using latest technologies and creative approaches.", "Collaboration: Working closely with clients to address their needs.", "Excellence: In the quality of our work and the level of service we give."]

  partners = [
    {
      title: "Technology",
      img: "../../../../assets/about/partner1.svg",
      name: "Volo Digital Agency",
      height: "50",
      width: "100"
    },
    {
      title: "Design",
      img: "../../../../assets/about/partner2.svg",
      name: "ZurMarke Studi",
      height: "60",
      width: "140"
    },
    {
      title: "Consulting",
      img: "../../../../assets/about/partner3.svg",
      name: "Pathpoint Consulting",
      height: "60",
      width: "180"
    },
    {
      title: "Web Design",
      img: "../../../../assets/about/5.png.png",
      name: "Tourism",
      height: "50",
      width: "120"
    },
  ]
  sectionFourNums = [
    {
      num: "10 years",
      heading: "In Business"
    },
    {
      num: "75,000+",
      heading: "Customers"
    },
    {
      num: "10k+",
      heading: "Monthly Blog Readers"
    },
    {
      num: "1.2m+",
      heading: "social followers"
    },
  ]


  ngOnInit(): void {
    this.getMembers()
    this.isDarkTheme = this.api.isDarkTheme();
    this.themechange()
  }

  getMembers() {
    this.api.getMembers().subscribe((res) => {
      this.members = res
      console.log(this.members.members)
    })
  }

  themechange() {
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }
}
