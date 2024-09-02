import { Component } from '@angular/core';

@Component({
  selector: 'app-healthcare',
  templateUrl: './healthcare.component.html',
  styleUrls: ['./healthcare.component.css'],
})
export class HealthcareComponent {
  images = {
    doctorImage: '../../../../assets/healthcare/doctor.jpeg',
    discussionImage: '../../../../assets/healthcare/discussion.jpeg',
  };
}
