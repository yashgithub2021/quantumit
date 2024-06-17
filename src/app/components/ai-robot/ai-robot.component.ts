import { Component, OnInit, ElementRef } from '@angular/core';
import AOS from 'aos';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-ai-robot',
  templateUrl: './ai-robot.component.html',
  styleUrls: ['./ai-robot.component.css']
})
export class AiRobotComponent implements OnInit {

  isDarkTheme!: boolean
  constructor(private elementRef: ElementRef, private api: ApiService) { }


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

  ngOnInit(): void {
    AOS.init({
      duration: 2000,
    })
    this.isDarkTheme = this.api.isDarkTheme();
    this.themechange();
    this.scrollToTop();
  }

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

  themechange() {
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
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
