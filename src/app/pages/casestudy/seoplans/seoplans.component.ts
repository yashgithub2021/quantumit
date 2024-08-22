import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-seoplans',
  templateUrl: './seoplans.component.html',
  styleUrls: ['./seoplans.component.css'],
})
export class SeoplansComponent implements OnInit {
  isDarkTheme: boolean;
  constructor(private api: ApiService) {
    this.isDarkTheme = this.api.isDarkTheme();
  }

  ngOnInit(): void {
    this.isDarkTheme = this.api.isDarkTheme();
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
      // Perform actions based on theme change
    });
  }
  features = [
    'Single user license',
    'Lifetime updates',
    '5,000+ icons',
    '6 unique styles',
    'Live stroke & corners',
    'Powered by variants',
    'IconJar & SVG library',
    'Unlimited projects',
  ];
}
