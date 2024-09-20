import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: [
    './real-estate.component.css',
    'css/bootstrap.min.css',
    'css/tiny-slider.css',
    'css/tobii.min.css',
    'css/materialdesignicons.min.css',
    'css/style.min.css',
  ],
})
export class RealEstateComponent implements OnInit {
  formData = {
    message: '',
    email: '',
    phone_no: '',
  };
  constructor(
    private renderer: Renderer2,
    private http: HttpClient,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    // Call loadScripts with an array of JS file paths
    this.loadScripts([
      '/src/app/pages/real-estate/js/app.js',
      '/src/app/pages/real-estate/js/tiny-slider.js',
      '/src/app/pages/real-estate/js/tobii.min.js',
      '/src/app/pages/real-estate/js/feather.min.js',
      '/src/app/pages/real-estate/js/bootstrap.bundle.min.js',
      '/src/app/pages/real-estate/js/gumshoe.polyfills.min.js',
      '/src/app/pages/real-estate/js/suffle.min.js',
      '/src/app/pages/real-estate/js/plugins.init.js',
    ]);
  }
  onSubmit() {
    const apiUrl =
      'https://quantumit-backend.onrender.com/api/real-estates/real-estate';

    this.http.post(apiUrl, this.formData).subscribe(
      (response) => {
        this.formData = { message: '', email: '', phone_no: '' };
        console.log('Form submitted successfully', response);
        this.toast.success('Form submitted successfully');
      },
      (error) => {
        console.error('Error submitting form', error);
        this.toast.error(error.message);
      }
    );
  }

  loadScripts(scripts: string[]): void {
    scripts.forEach((src) => this.loadScript(src));
  }

  loadScript(src: string): void {
    const script = this.renderer.createElement('script');
    script.src = src;
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
  }
}
