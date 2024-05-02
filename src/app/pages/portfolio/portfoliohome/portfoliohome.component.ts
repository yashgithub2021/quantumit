import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-portfoliohome',
  templateUrl: './portfoliohome.component.html',
  styleUrls: ['./portfoliohome.component.css']
})
export class PortfoliohomeComponent implements OnInit {

  isDarkTheme!: boolean
  activeTab: string = 'all'
  projects: any
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.isDarkTheme = this.api.isDarkTheme();
    this.themechange()
    this.fetchProjects()
  }

  themechange() {
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }

  changeTab(tab: string) {
    this.activeTab = tab
  }

  webAppTab() {
    this.fetchWebProjects()
    this.changeTab('web-app')
  }

  fetchProjects() {
    this.changeTab('all')
    this.api.getProjects().subscribe((res: any) => {
      this.projects = res.project
      console.log(this.projects)
    })
  }

  fetchWebProjects() {
    this.changeTab('web-design')
    this.api.getWebAppProjects().subscribe((res: any) => {
      this.projects = res.projects
      console.log(res.projects)
    })
  }

  fetchAppProjects() {
    this.changeTab('app')
    this.api.getMobileAppProjects().subscribe((res: any) => {
      this.projects = res.projects
      console.log(this.projects)
    })
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
