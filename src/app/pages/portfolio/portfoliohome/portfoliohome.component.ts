import { Component, ElementRef, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-portfoliohome',
  templateUrl: './portfoliohome.component.html',
  styleUrls: ['./portfoliohome.component.css']
})
export class PortfoliohomeComponent implements OnInit {

  isDarkTheme!: boolean
  activeTab: string = 'all'
  projects: any[] = [];
  filteredProjects: any[] = [];
  loadingStatus: boolean = true;
  constructor(private api: ApiService, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.isDarkTheme = this.api.isDarkTheme();
    this.themechange();
    this.fetchProjects();
    this.scrollToTop();
  }

  themechange() {
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }


  fetchProjects(): void {
    this.loadingStatus = true;
    this.api.getProjects().subscribe(
      (res: any) => {
        this.projects = res.project;
        this.filteredProjects = [...this.projects];
        this.filterProjects('all');
        this.loadingStatus = false;
      },
      err => {
        console.error(err);
        this.loadingStatus = false;
      }
    );
  }
  filterProjects(category: string): void {
    this.scrollToMiddeleOfProjectCard();
    if (category === 'all') {
      this.activeTab = 'all';

      this.filteredProjects = this.projects;
      // console.log(this.filteredProjects);
    } else {
      this.filteredProjects = this.projects.filter((project: any) =>
        project.category.includes(category)
      );
    }
  }

  fetchWebProjects() {
    this.filterProjects('Web App');
    this.activeTab = 'Web Development'
  }

  fetchAppProjects() {
    this.filterProjects('Mobile App');
    this.activeTab = 'Mobile App'
  }

  webAppTab() {
    this.filterProjects('Web App');
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
