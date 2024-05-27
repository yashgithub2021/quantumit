import { Component, ElementRef, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-casestudy',
  templateUrl: './casestudy.component.html',
  styleUrls: ['./casestudy.component.css']
})
export class CasestudyComponent implements OnInit {

  isDarkTheme!: boolean
  constructor(private api: ApiService,private elementRef:ElementRef) {
   }

  ngOnInit(): void {
    Aos.init({
      duration: 2000,
    })
    this.scrollToTop();
    this.isDarkTheme = this.api.isDarkTheme();
    this.themechange()
  }

  themechange() {
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
