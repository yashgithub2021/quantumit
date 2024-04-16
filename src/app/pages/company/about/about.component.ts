import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(private api: ApiService) { }
  list2 = ["Cut additional costs", "Increase the speed of delivery", "Access expertise that is not available in-house", "Solely focus on your business objectives"]

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

  members: any

  ngOnInit(): void {
    this.getMembers()
  }

  getMembers() {
    this.api.getMembers().subscribe((res) => {
      this.members = res
      console.log(this.members.members)
    })
  }
}
