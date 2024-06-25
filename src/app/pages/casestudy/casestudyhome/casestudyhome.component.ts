import { Component, ElementRef, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-casestudyhome',
  templateUrl: './casestudyhome.component.html',
  styleUrls: ['./casestudyhome.component.css']
})
export class CasestudyhomeComponent implements OnInit {

  isDarkTheme!: boolean
  activeTab: string = 'Mobile App'
  projects: any[] = [];
  filteredProjects: any[] = [];

  mobileCaseStudy = [
    {
      name: "Mobile App Development",
      portfolioImage: '',
      link: '/app-development/casestudy'
    }
  ]
  webCaseStudy = [
    {
      name: "Web App Development",
      portfolioImage: '',
      link: '/web-development/casestudy'
    }
  ]
  dmCaseStudy = [
    {
      name: "Digital Marketing",
      portfolioImage: '',
      link: '/digital-marketing/casestudy'
    }
  ]
  aiCaseStudy = [
    {
      name: "Artificial Intelligence",
      portfolioImage: '',
      link: '/ai/casestudy'
    }
  ]
  // loadingStatus: boolean = true;
  constructor(private api: ApiService, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.isDarkTheme = this.api.isDarkTheme();
    this.themechange();
    this.scrollToTop();
    this.filteredProjects = this.mobileCaseStudy
  }

  themechange() {
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }

  ChangeCaseStudy(caseStudy: string) {
    switch (caseStudy) {
      case 'Mobile App':
        this.filteredProjects = this.webCaseStudy
        this.activeTab = caseStudy
        break;
      case 'Web Development':
        this.filteredProjects = this.webCaseStudy
        this.activeTab = caseStudy
        break;
      case 'Digital Marketing':
        this.filteredProjects = this.dmCaseStudy
        this.activeTab = caseStudy
        break
      case 'Artificial Intilligence':
        this.filteredProjects = this.aiCaseStudy
        this.activeTab = caseStudy
        break
    }
  }

  fetchProjects(): void {
    // this.loadingStatus = true;
    this.api.getProjects().subscribe(
      (res: any) => {
        this.projects = res.project;
        console.log(this.projects);
        this.filteredProjects = [...this.projects];
        this.filterProjects('Mobile App', 'AMPS');
        // this.loadingStatus = false;
      },
      err => {
        console.error(err);
        // this.loadingStatus = false;
      }
    );
  }
  filterProjects(category: string, projectName: string): void {
    this.scrollToMiddeleOfProjectCard();
    if (category === 'all') {
      this.activeTab = 'all';

      this.filteredProjects = this.projects;
      // console.log(this.filteredProjects);
    } else {
      this.filteredProjects = this.projects.filter((project: any) =>
        project.category.includes(category) && project.name.includes(projectName)
      );
      console.log(this.filteredProjects);
    }
  }

  fetchWebProjects() {
    this.filterProjects('Web App', '');
    this.activeTab = 'Web Development'
  }

  fetchAppProjects() {
    this.filterProjects('Mobile App', 'AMPS');
    this.activeTab = 'Mobile App'
  }

  webAppTab() {
    this.filterProjects('Web App', '');
    this.activeTab = 'Web App'
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  scrollToMiddeleOfProjectCard() {
    const contentMiddle = this.elementRef.nativeElement.querySelector('.app-detail');
    if (contentMiddle) {
      contentMiddle.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }

}
