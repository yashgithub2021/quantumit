import { Component, OnInit, Renderer2 } from '@angular/core';

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
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Call loadScripts with an array of JS file paths
    this.loadScripts([
      '/src/app/pages/real-estate/js/app.js"',
      '/src/app/pages/real-estate/js/tiny-slider.js',
      '/src/app/pages/real-estate/js/tobii.min.js',
      '/src/app/pages/real-estate/js/feather.min.js',
      '/src/app/pages/real-estate/js/bootstrap.bundle.min.js',
      '/src/app/pages/real-estate/js/gumshoe.polyfills.min.js',
      '/src/app/pages/real-estate/js/suffle.min.js',
      '/src/app/pages/real-estate/js/plugins.init.js',
      '/src/app/pages/real-estate/js/app.js',
    ]);
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
