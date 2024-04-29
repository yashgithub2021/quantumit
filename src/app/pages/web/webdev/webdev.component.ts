import { Component, OnInit, ElementRef } from '@angular/core';
import AOS from 'aos';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-webdev',
  templateUrl: './webdev.component.html',
  styleUrls: ['./webdev.component.css']
})
export class WebdevComponent implements OnInit {

  projects!: any
  isDarkTheme!: boolean
  constructor(private elementRef: ElementRef, private api: ApiService) { }

  our_steps = [
    {
      stepNo: "Step 01",
      title: "Planning and Research",
      desc: "Define the website's purpose, target audience, and goals. Conduct research on competitors and industry trends to inform design and content decisions."
    },
    {
      stepNo: "Step 02",
      title: "Design",
      desc: "Create wireframes and design mockups based on the planning stage. Design the layout, user interface, and visual elements to ensure an engaging user experience."
    },
    {
      stepNo: "Step 03",
      title: "Development",
      desc: "Write code to bring the design to life. This involves front-end development for the user interface and back-end development for functionality such as databases and server-side logic."
    }
  ]
  our_steps2 = [
    {
      stepNo: "Step 04",
      title: "Testing",
      desc: "Thoroughly test the website across different devices, browsers, and screen sizes to ensure compatibility and functionality. Identify and fix any bugs or issues that arise."
    },
    {
      stepNo: "Step 05",
      title: "Launch and Maintainance",
      desc: " Deploy the website to the hosting server and make it live. Monitor performance, gather feedback, and make necessary updates and improvements to keep the website running smoothly."
    },
  ]

  ngOnInit(): void {
    AOS.init({
      duration: 2000,
    })
    this.isDarkTheme = this.api.isDarkTheme();
    this.fetchWebProjects()
    this.themechange()
  }

  fetchWebProjects() {
    this.api.getWebAppProjects()
      .subscribe((res: any) => {
        this.projects = res.projects
        console.log(this.projects)
      })
  }

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
  scrollToProcess() {
    const footer = this.elementRef.nativeElement.querySelector('#our-process');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }
}
