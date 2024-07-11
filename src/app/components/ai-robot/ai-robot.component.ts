import { Component, OnInit, ElementRef } from '@angular/core';
import AOS from 'aos';
import { ApiService } from 'src/app/shared/api/api.service';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-ai-robot',
  templateUrl: './ai-robot.component.html',
  styleUrls: ['./ai-robot.component.css']
})
export class AiRobotComponent implements OnInit {

  isDarkTheme!: boolean;

  dynamicTitle = 'AI Development Services | AI Development Company | AI Consulting';
  dynamicDescription = 'Explore Quantum IT Innovation for expert AI consulting services, chatbot development, and generative AI solutions. Leading AI development company for enterprise solutions.';

  constructor(private titleService: Title,
    private metaService: Meta,private elementRef: ElementRef, private api: ApiService) { }

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
  ourAIGenerative: any[] = [
    {
      img: '../../../assets/services/AI_service/aigenerator/img1.png',
      title: 'Generative Ai Development',
      link: '/ai/Generative-Ai-Development'
    }, {
      img: '../../../assets/services/AI_service/aigenerator/img2.png',
      title: 'Generative Ai integration services',
      link: '/ai/Generative-Ai-Integration-Services'
    }, {
      img: '../../../assets/services/AI_service/aigenerator/img3.png',
      title: 'Generative Ai consulting company',
      link: '/ai/Generative-Ai-consulting-company'
    }, {
      img: '../../../assets/services/AI_service/aigenerator/img4.png',
      title: 'hire generative ai engineers',
      link: '/ai/hire-generative-ai-engineers'
    }, {
      img: '../../../assets/services/AI_service/aigenerator/img5.png',
      title: 'Ai Agent Development',
      link: '/ai/Ai-Agent-Development'
    }, {
      img: '../../../assets/services/AI_service/aigenerator/img6.png',
      title: 'Ai Copilot Development',
      link: '/ai/Ai-Copilot-Development'
    }, {
      img: '../../../assets/services/AI_service/aigenerator/img7.png',
      title: 'Hire Prompt Engineers',
      link: '/ai/Hire-Prompt-Engineers'
    }, {
      img: '../../../assets/services/AI_service/aigenerator/img8.png',
      title: 'Adaptive Ai Development Co.',
      link: '/ai/Adaptive-Ai-Development-Co.'
    }, {
      img: '../../../assets/services/AI_service/aigenerator/img9.png',
      title: 'ChatGPT Developers',
      link: '/ai/ChatGPT-Developers'
    }, {
      img: '../../../assets/services/AI_service/aigenerator/img10.png',
      title: 'Stable Diffusion Developers',
      link: '/ai/Stable-Diffusion-Developers'
    }, {
      img: '../../../assets/services/AI_service/aigenerator/img11.png',
      title: 'ChatGPT Integration Service',
      link: '/ai/ChatGPT-Integration-Service'
    }, {
      img: '../../../assets/services/AI_service/aigenerator/img12.png',
      title: 'Large Language Model',
      link: '/ai/Large-Language-Model'
    },
  ]
  ourAIServices: any[] = [
    {
      img: '../../../assets/services/AI_service/aiservice/img1.png',
      title: 'Ai Development',
      link: 'Ai-Development'
    }, {
      img: '../../../assets/services/AI_service/aiservice/img2.png',
      title: 'Ai Consulting',
      link: 'Ai-Consulting'
    }, {
      img: '../../../assets/services/AI_service/aiservice/img3.png',
      title: 'Ai As A Service',
      link: 'Ai-As-A-Service'
    }, {
      img: '../../../assets/services/AI_service/aiservice/img4.png',
      title: 'hire Action Transformer Developer',
      link: 'Hire-Action-Transformer-Developer'
    }, {
      img: '../../../assets/services/AI_service/aiservice/img5.png',
      title: 'Ai Agent Development',
      link: 'Ai-Agent-Development'
    }, {
      img: '../../../assets/services/AI_service/aiservice/img6.png',
      title: 'MLOps Consulting service',
      link: 'MLOps-Consulting-service'
    }, {
      img: '../../../assets/services/AI_service/aiservice/img7.png',
      title: 'Enterprise Ai Development',
      link: 'Enterprise-Ai-Development'
    }, {
      img: '../../../assets/services/AI_service/aiservice/img8.png',
      title: 'Ai Chatbot Development Co.',
      link: 'Ai-Chatbot-Development-Co'
    }
  ]

  ngOnInit(): void {

    this.titleService.setTitle(this.dynamicTitle);
    this.metaService.updateTag({ name: 'description', content: this.dynamicDescription });

    AOS.init({
      duration: 2000,
    })
    this.isDarkTheme = this.api.isDarkTheme();
    this.themechange();
    this.scrollToTop();
  }

  checks = ["Chatbot API", "Facial Recognition API", "Natural language processing APIs", "AWS ML Solutions"]

  // milestones = [
  //   {
  //     img: "../../../assets/ai/25.svg",
  //     num: "25+",
  //     title: "Countries Represented"
  //   },
  //   {
  //     img: "../../../assets/ai/1200.svg",
  //     num: "1200+",
  //     title: "Completed Projects"
  //   },
  //   {
  //     img: "../../../assets/ai/140.svg",
  //     num: "140+",
  //     title: "Team Members"
  //   },
  // ]
  milestones = [
    {
      num: "400+",
      title: "Active Clients",
      img: "../../../assets/ai/25.svg",

    },
    {
      num: "850 +",
      title: "Projects Done",
      img: "../../../assets/ai/1200.svg",

    },
    {
      num: "250+",
      title: "Team Advisors",
      img: "../../../assets/ai/140.svg",

    },
    {
      num: "10+",
      title: "Glorious Years",
      img: '../../../assets/services/AI_service/aigenerator/img8.png',
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
