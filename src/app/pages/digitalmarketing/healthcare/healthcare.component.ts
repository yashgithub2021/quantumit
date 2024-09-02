import { Component } from '@angular/core';

@Component({
  selector: 'app-healthcare',
  templateUrl: './healthcare.component.html',
  styleUrls: ['./healthcare.component.css'],
})
export class HealthcareComponent {
  images = {
    doctorImage: '../../../../assets/healthcare/doctor.webp',
    discussionImage: '../../../../assets/healthcare/discussion.webp',
    discussionImage2: '../../../../assets/healthcare/discussion2.webp',
    nurseImage: '../../../../assets/healthcare/nurse.webp',
  };
}
