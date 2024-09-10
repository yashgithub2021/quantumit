import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-healthcare',
  templateUrl: './healthcare.component.html',
  styleUrls: ['./healthcare.component.css'],
})
export class HealthcareComponent implements OnInit {
  isDarkTheme: boolean = false;
  images = {
    doctorImage: '../../../../assets/healthcare/doctor.webp',
    discussionImage: '../../../../assets/healthcare/discussion.webp',
    discussionImage2: '../../../../assets/healthcare/discussion2.webp',
    nurseImage: '../../../../assets/healthcare/nurse.webp',
  };
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.isDarkTheme = this.api.isDarkTheme();
    this.themechange();
  }
  themechange() {
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }
  scrollDown(): void {
    const target = document.getElementById('about-us');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
