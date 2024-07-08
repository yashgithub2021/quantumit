import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api/api.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  constructor(private api: ApiService, private activeRoute: ActivatedRoute,private router:Router) { }
  checks = ["Chatbot API", "Facial Recognition API", "Natural language processing APIs", "AWS ML Solutions"]
  isDarkTheme!: boolean;
  projectId!: any;
  projectDetails!: any;
  loadingStatus:boolean=true;

  projects:any;
  filteredProjects:any[]=[];
  nextProjectCount!:number;

  ngOnInit(): void {
    this.isDarkTheme = this.api.isDarkTheme();

    this.getAllProjects();

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
  getAllProjects(){
    this.api.getProjects().subscribe(
      (res: any) => {
        this.projects = res.project;
        this.filteredProjects = [...this.projects];
        this.filteredProjects=this.filteredProjects.filter(project=>{
          if(project.category[0]=='Digital Marketing'){
            return project;
          }
        });
        console.log(this.filteredProjects);
      }
    );
  }
  findIndexOfProject(project_id:any){
    const index = this.filteredProjects.findIndex(obj => obj._id == project_id);
    if(index!=-1){
      this.nextProjectCount=index;
    }
  }
  findIdOfProject(index:number){
    this.projectId=this.filteredProjects[index]._id;
    this.router.navigate(['/web-development/details', this.projectId]);
  }
  next(){
    this.findIndexOfProject(this.projectId);

    if(this.nextProjectCount==this.projects.length-1){
      this.nextProjectCount=this.nextProjectCount;
    }
    else if(this.nextProjectCount<=this.filteredProjects.length-1){
      this.nextProjectCount++;
      this.findIdOfProject(this.nextProjectCount);
      this.fetchProjectDetails();
      this.scrollToTop();
    }
  }
  prev(){
    this.findIndexOfProject(this.projectId);

    if(this.nextProjectCount==0){
      this.nextProjectCount=this.nextProjectCount;
    }
    else if(this.nextProjectCount>0 && this.nextProjectCount<=this.filteredProjects.length-1){
      this.nextProjectCount--;
      this.findIdOfProject(this.nextProjectCount);
      this.fetchProjectDetails();
      this.scrollToTop();
    }
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
