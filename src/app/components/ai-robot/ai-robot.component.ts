import { Component, OnInit, ElementRef } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-ai-robot',
  templateUrl: './ai-robot.component.html',
  styleUrls: ['./ai-robot.component.css']
})
export class AiRobotComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }


  ngOnInit(): void {
    AOS.init({
      duration: 2000,
    })
  }
  aiService = [
    {
      img: "../../../assets/ai/Frame1.png",
      title: "Predictive Analysis"
    },

    {
      img: "../../../assets/ai/Frame2.png",
      title: "Data Engineers"
    },

    {
      img: "../../../assets/ai/Frame3.png",
      title: "Deep Learning"
    },

    {
      img: "../../../assets/ai/Frame4.png",
      title: "Healthcare"
    },

    {
      img: "../../../assets/ai/Frame5.png",
      title: "Data Mining"
    },

    {
      img: "../../../assets/ai/Frame6.png",
      title: "Statistical Modeling"
    },

  ]


  checks = ["Chatbot API", "Facial Recognition API", "Natural language processing APIs", "AWS ML Solutions"]

  milestones = [
    {
      img: "../../../assets/ai/25.svg",
      num: "25+",
      title: "Countries Represented"
    },
    {
      img: "../../../assets/ai/1200.svg",
      num: "1200+",
      title: "Completed Projects"
    },
    {
      img: "../../../assets/ai/140.svg",
      num: "140+",
      title: "Team Members"
    },
  ]


  scrollToForm() {
    const footer = this.elementRef.nativeElement.querySelector('#form');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }
  scrollToWWD() {
    const footer = this.elementRef.nativeElement.querySelector('#wwd');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }
}
