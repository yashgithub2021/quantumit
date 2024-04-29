import { Component, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from './shared/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private renderer: Renderer2, private api: ApiService) { }

  title = 'quantumit';
  theme = 'dark'
  isDarkMode!: boolean
  ngOnInit() {
    // Check theme preference from local storage or service and apply it
    this.isDarkMode = this.isDarkTheme(); // Example: Get theme preference from local storage or service
    console.log(this.isDarkMode)
    this.setTheme(this.isDarkMode);
    this.themechange()
  }
  setTheme(isDarkTheme: boolean) {
    // Add or remove CSS class based on theme preference
    if (isDarkTheme) {
      this.renderer.addClass(document.body, 'dark-theme');
      this.renderer.removeClass(document.body, 'light-theme');
    } else {
      this.renderer.addClass(document.body, 'light-theme');
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }
  isDarkTheme(): boolean {
    return this.api.isDarkTheme();
  }

  themechange() {
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkMode = isDarkTheme;
    });
  }
}