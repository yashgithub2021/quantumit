import { Component } from '@angular/core';

@Component({
  selector: 'app-innerblog',
  templateUrl: './innerblog.component.html',
  styleUrls: ['./innerblog.component.css']
})
export class InnerblogComponent {
  checks = ["Listen to what they say about you", "Randomised words which don't look even slightly believable.", "Lorem Ipsum generators on the Internet tend to repeat predefined chunks", "Automate multiple scenarios and eliminate tedious tasks. "]
  sectionFourNums = [
    {
      num: "330 +",
      heading: "ACTIVE CLIENTS"
    },
    {
      num: "850 +",
      heading: "Projects done"
    },
    {
      num: "25 +",
      heading: "team advisors"
    },
    {
      num: "10 +",
      heading: "glorious years"
    },

  ]
}
