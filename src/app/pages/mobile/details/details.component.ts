import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  aiService = [
    {
      num: "01.",
      title: "Mobile App Strategy",
      desc: "Our mobile app strategy integrates market research, user-centric design, and agile development to create impactful apps aligned with your business goals."
    },

    {
      num: "02.",
      title: "Mobile App Design",
      desc: "Mobile app design focuses on creating intuitive, visually appealing interfaces optimized for seamless user experiences on smartphones and tablets."
    },

    {
      num: "03.",
      title: "Mobile App Development",
      desc: "Mobile app development involves designing, building, and launching applications tailored for use on smartphones and tablets across various platforms."
    },

    {
      num: "04.",
      title: "Mobile App Testing",
      desc: "Mobile app testing ensures the functionality, usability, and performance of applications across different devices and platforms to deliver a seamless user experience."
    },

    {
      num: "05.",
      title: "Enterprise Mobile App",
      desc: "Enterprise mobile apps are designed to address the specific needs and workflows of large organizations, enhancing productivity and efficiency in the workplace."
    },

    {
      num: "06.",
      title: "Mobile Game Development",
      desc: "Mobile game development involves creating interactive and engaging gaming experiences optimized for smartphones and tablets, catering to a diverse audience of gamers."
    },

  ]

}
