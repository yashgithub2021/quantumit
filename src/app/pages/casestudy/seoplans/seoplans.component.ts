import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-seoplans',
  templateUrl: './seoplans.component.html',
  styleUrls: ['./seoplans.component.css'],
})
export class SeoplansComponent implements OnInit {
  isDarkTheme!: boolean;

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
  cursorImg = '../../../../assets/cursor.png';

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
}
