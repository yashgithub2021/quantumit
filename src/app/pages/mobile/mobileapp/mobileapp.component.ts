import { Component, ElementRef, OnInit } from '@angular/core';
import AOS from 'aos';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-mobileapp',
  templateUrl: './mobileapp.component.html',
  styleUrls: ['./mobileapp.component.css']
})
export class MobileappComponent implements OnInit {

  list1: any[] = []

  aiService = [
    {
      num: "01.",
      title: "Curate a skilled team ensuring synergy and expertise",
      desc: "Our app development starts with building a specialized team, ensuring every project receives expert attention and collaboration."
    },

    {
      num: "02.",
      title: "Refined Sprint Planning",
      desc: "Our streamlined sprint planning ensures precise goals and timelines, facilitating smooth project execution."
    },

    {
      num: "03.",
      title: "Architech Robust Code Technology Infrastructure",
      desc: "Our code tech architecture prioritizes scalability and efficiency, laying a strong foundation for future growth."
    },

    {
      num: "04.",
      title: "Implement an iterative delivery approach",
      desc: "Our iterative delivery approach fosters continuous improvement and client satisfaction, ensuring each milestone brings added value and refinement."
    },

    {
      num: "05.",
      title: "Conduct comprehensive code reviews",
      desc: "Thorough code reviews guarantee high-quality, standards-compliant software, fostering reliability and excellence"
    },

    {
      num: "06.",
      title: "Facilitate regular stand ups and demos",
      desc: "Regular stand ups and demos maintain transparency and collaboration, ensuring projects stay on course and stakeholders remain engaged and informed."
    },

  ]

  isDarkTheme!: boolean;
  projects!: any[]

  constructor(private api: ApiService, private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.list1 = ["Android App Development", "Swift App Development", "iOS App Development", "iPad App Development", "Cross Platform App"]
    AOS.init({
      duration: 2000,
    })
    this.isDarkTheme = this.api.isDarkTheme();
    this.themechange()
    this.fetchMobileProjects()
  }

  themechange() {
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }

  fetchMobileProjects() {
    this.api.getMobileAppProjects()
      .subscribe((res: any) => {
        this.projects = res.projects
        console.log(res)
      })
  }

  // fetchProjects() {
  //   this.api.getProjects()
  //     .subscribe((res: any) => {
  //       this.projects = res.project
  //       console.log(res.project)
  //     })
  // }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  scrollToFooter() {
    const footer = this.elementRef.nativeElement.querySelector('#form');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }
  scrollToServices() {
    const footer = this.elementRef.nativeElement.querySelector('#our-services');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }
}
