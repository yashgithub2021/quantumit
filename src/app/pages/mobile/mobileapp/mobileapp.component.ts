import { Component, ElementRef, OnInit } from '@angular/core';
import AOS from 'aos';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/shared/api/api.service';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-mobileapp',
  templateUrl: './mobileapp.component.html',
  styleUrls: ['./mobileapp.component.css']
})
export class MobileappComponent implements OnInit {

  list1: any[] = [];
  dynamicTitle = 'Mobile App Development Services | Custom Mobile App Development';
  dynamicDescription = 'Discover top mobile app developers near you at Quantum IT Innovation. We offer custom mobile app development services, including cross-platform solutions. Your best mobile app development company!';

  aiService = [
    {
      num: "01.",
      title: "Curate a skilled team, ensuring synergy and expertise",
      desc: "Our app development starts with building a specialized team, ensuring every project receives expert attention and collaboration."
    },

    {
      num: "02.",
      title: "Achieve Clarity and Precision with Our Refined Sprint Planning",
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
      desc: "Thorough code reviews guarantee high-quality, standard-compliant software, fostering reliability and consistency across the codebase."
    },

    {
      num: "06.",
      title: "Facilitate regular stand ups and demos",
      desc: "Regular stand ups and demos maintain transparency and collaboration, ensuring projects stay on course and stakeholders remain engaged and informed."
    },

  ]

  isDarkTheme!: boolean;
  projects!: any[]

  constructor(private titleService: Title,
    private metaService: Meta, private api: ApiService, private elementRef: ElementRef, private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.dynamicTitle);
    this.metaService.updateTag({name:'description',content:this.dynamicDescription});

    AOS.init({
      duration: 2000,
    })
    this.list1 = ["Android App Development", "Swift App Development", "iOS App Development", "iPad App Development", "Cross Platform App Development"]
    console.log(this.list1)
    this.isDarkTheme = this.api.isDarkTheme();
    this.themechange();
    this.fetchMobileProjects();
    this.scrollToTop();
  }

  themechange() {
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }

  fetchMobileProjects() {
    this.spinner.show();
    this.api.getMobileAppProjects()
      .subscribe((res: any) => {
        this.projects = res.projects
        console.log(res)
        setTimeout(() => { // Add a delay before hiding spinner
          this.spinner.hide();
        }, 1000); // Adjust the delay time as needed
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
