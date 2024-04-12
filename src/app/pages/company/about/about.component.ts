import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
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
}
