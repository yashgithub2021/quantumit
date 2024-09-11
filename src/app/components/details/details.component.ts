import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api/api.service';
import { DataService } from 'src/app/shared/api/data.service';
import AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { FormComponent } from '../form/form.component';
import { faqs } from 'src/app/shared/shared/service-data';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  standalone: true,
  imports: [CommonModule, SharedModule, FormComponent],
})
export class DetailsComponent implements OnInit {
  isDarkTheme!: boolean;
  faqdata = faqs;
  service: any;
  androidService!: any;
  serviceDetails!: any;
  differentPageStatus: boolean = true;
  page!: boolean;
  data: any;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private api: ApiService,
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    AOS.init({
      duration: 2000,
    });
    this.isDarkTheme = this.api.isDarkTheme();
    this.themechange();
    this.route.data.subscribe((data: any) => {
      const titlemeta = data['services'];
      if (titlemeta.title == 'UIUX') {
        this.data = this.faqdata.uiUxDesignService;
        this.page = true;
      } else if (titlemeta.title == 'Mobile App Development Dallas') {
        this.data = this.faqdata.mobileApp;
        this.page = true;
      } else {
        this.page = false;
      }
      this.checkForDifferentPageRedirect(data.services);
      this.androidService = data.services.services;
      this.serviceDetails = this.androidService;
      //for seo
      this.titleService.setTitle(titlemeta.title || 'Quantum IT Innovation');
      this.metaService.updateTag({
        name: 'description',
        content:
          titlemeta.description ||
          'Top-Tier Web Development Services, Tailored To Perfection For Your Digital Needs.',
      });
    });
  }
  checkForDifferentPageRedirect(data: any) {
    if (data.title === 'Android App') {
      this.differentPageStatus = false;
    } else if (data.title === 'iOS App') {
      this.differentPageStatus = false;
    } else if (data.title === 'swift App') {
      this.differentPageStatus = false;
    } else if (data.title === 'cross Platfom App') {
      this.differentPageStatus = false;
    } else if (data.title === 'iPad App') {
      this.differentPageStatus = false;
    } else if (data.title === 'mobileGame App') {
      this.differentPageStatus = false;
    } else if (data.title === 'RAP') {
      this.differentPageStatus = false;
    } else if (data.title === 'internet of things') {
      this.differentPageStatus = false;
    } else if (data.title === 'AI') {
      this.differentPageStatus = false;
    } else if (data.title === 'UIUX') {
      this.differentPageStatus = false;
    } else if (data.title === 'Mobile App Development Dallas') {
      this.differentPageStatus = false;
    } else if (data.title === 'Web Development Company USA') {
      this.differentPageStatus = false;
    } else if (data.title === 'Professional SEO Services Company') {
      this.differentPageStatus = false;
    } else if (data.title === 'NJ SEO Company') {
      this.differentPageStatus = false;
    } else if (data.title === 'SEO Services Indianapolis USA') {
      this.differentPageStatus = false;
    } else if (data.title === 'SEO Company USA') {
      this.differentPageStatus = false;
    } else if (data.title === 'AI Consulting Newyork') {
      this.differentPageStatus = false;
    } else if (data.title === 'AI Consulting and Development Los Angeles') {
      this.differentPageStatus = false;
    } else if (data.title === 'AI Consulting Dallas') {
      this.differentPageStatus = false;
    } else {
      this.differentPageStatus = true;
    }
  }

  themechange() {
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }
}
