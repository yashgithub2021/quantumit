import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  checks = ["Chatbot API", "Facial Recognition API", "Natural language processing APIs", "AWS ML Solutions"]
  isDarkTheme!: boolean;
  projectId!: any
  projectDetails!: any;
  loadingStatus:boolean=true;

  constructor(private api: ApiService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.isDarkTheme = this.api.isDarkTheme();
    this.themechange()
    this.fetchProjectId()
    this.fetchProjectDetails()
  }

  themechange() {
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }

  fetchProjectId() {
    this.activeRoute.paramMap.subscribe((id: any) => {
      this.projectId = id.get('id')
    })
  }
  fetchProjectDetails() {
    this.api.getProjectsById(this.projectId).subscribe((res: any) => {
      this.projectDetails = res.project;
      this.loadingStatus=false;
      console.log(this.projectDetails)
    },err=>{
      this.loadingStatus=false;
    })
  }
}
