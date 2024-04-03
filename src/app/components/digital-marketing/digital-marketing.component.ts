import { Component } from '@angular/core';

@Component({
  selector: 'app-digital-marketing',
  templateUrl: './digital-marketing.component.html',
  styleUrls: ['./digital-marketing.component.css']
})
export class DigitalMarketingComponent {

  brandLogo = [
    {
      img: '../../../assets/carousel/one.svg'
    },
    {
      img: '../../../assets/carousel/two.svg'
    },
    {
      img: '../../../assets/carousel/three.svg'
    },
    {
      img: '../../../assets/carousel/4.png.svg'
    },
    {
      img: '../../../assets/carousel/one.svg'
    },
    {
      img: '../../../assets/carousel/5.png.svg'
    },
    {
      img: '../../../assets/carousel/6.png.svg'
    },
  ]

  our_stories = [
    {
      name: "Goldmiths Corpo Engagement rates.",
      num: "+30%",
    },
    {
      name: "Goldmiths Corpo Engagement rates.",
      num: "+30%",
    },
    {
      name: "Goldmiths Corpo Engagement rates.",
      num: "+30%",
    },
  ]

  tableData = [

    {
      img: "../../../assets/dm/table-img.svg",
      heading: "Search Engine",
      tail: "Optimization",
      desc: ""
    },
    {
      img: "../../../assets/dm/paid-search.svg",
      heading: "Paid Search",
      tail: "Marketing",
      desc: ""
    },
    {
      img: "../../../assets/dm/conversion-rate.svg",
      heading: "Conversion Rate",
      tail: "Optimization",
      desc: ""
    },
    {
      img: "../../../assets/dm/social-media.svg",
      heading: "Social Media",
      tail: "Marketing",
      desc: ""
    },
    {
      img: "../../../assets/dm/email.svg",
      heading: "Email marketing",
      tail: "Solutions",
      desc: ""
    },
    {
      img: "../../../assets/dm/ppc.svg",
      heading: "Pay-Per-Click (PPC)",
      tail: "Advertising",
      desc: ""
    },
  ]
}
