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
      desc: "Quantum is a top mobile app development company that helps in defining and implementing a successful strategy for the success of your business."
    },

    {
      num: "02.",
      title: "Mobile App Design",
      desc: "Design and user experience can make or break your mobile app. Our mobile app development company provides services that ensures excellent designs and user interface."
    },

    {
      num: "03.",
      title: "Mobile App Development",
      desc: "Quantum, a leading mobile app development company has a strong team of developers with an average industry experience of 5+ years."
    },

    {
      num: "04.",
      title: "Mobile App Testing",
      desc: "Our offshore mobile application development experts provides you high performance and 100% reliable mobile app testing services."
    },

    {
      num: "05.",
      title: "Enterprise Mobile App",
      desc: "Our mobile app development company in India has experts, developers and analysts working on enterprise mobile application development for fortune 1000 "
    },

    {
      num: "06.",
      title: "Mobile Game Development",
      desc: "Quantum is a top offshore mobile app development company in India that provides robust, high performance and reliable mobile game development services."
    },

  ]

}
