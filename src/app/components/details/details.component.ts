import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api/api.service';
import { DataService } from 'src/app/shared/api/data.service';
import AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  isDarkTheme!: boolean;
  service: any
  androidService!: any;
  serviceDetails!:any;
  differentPageStatus: boolean = true;

  constructor(private titleService: Title,
    private metaService: Meta,private api: ApiService, private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    AOS.init({
      duration: 2000,
    })
    this.isDarkTheme = this.api.isDarkTheme();
    this.themechange()
    this.route.data.subscribe((data: any) => {
      console.log(data);
      this.checkForDifferentPageRedirect(data.services);
      this.androidService = data.services.services;
      this.serviceDetails=this.androidService;
      console.log(this.androidService.metaTitle);
      //for seo
      this.titleService.setTitle(this.androidService.metaTitle || 'Default Title');
      this.metaService.updateTag({ name: 'description', content:this.androidService.metaDescription || 'Default Description' });

    });

  }
  checkForDifferentPageRedirect(data: any) {
    if (data.title === 'Android App') {
      this.differentPageStatus=false;
    }
    else if (data.title === 'iOS App') {
      this.differentPageStatus=false;

    }
    else if (data.title === 'swift App') {
      this.differentPageStatus=false;

    }
    else if (data.title === 'cross Platfom App') {
      this.differentPageStatus=false;

    }
    else if (data.title === 'iPad App') {
      this.differentPageStatus=false;

    }
    else if (data.title === 'mobileGame App') {
      this.differentPageStatus=false;

    }
    else if (data.title === 'RAP') {
      this.differentPageStatus=false;

    }
    else if (data.title === 'internet of things') {
      this.differentPageStatus=false;

    }
    else{
      this.differentPageStatus=true;

    }


  }

  themechange() {
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }

}
