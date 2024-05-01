import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isDarkTheme!: boolean;

  constructor(private api: ApiService, private cdr: ChangeDetectorRef) {
    this.isDarkTheme = this.api.isDarkTheme();
  }

  closeNavbar() {
    // Check if the navbar is collapsed
    const navToggler = document.querySelector('.navbar-toggler') as HTMLButtonElement | null;
    console.log(navToggler);
    if (navToggler && navToggler.getAttribute('aria-expanded') === 'true') {
      // Collapse the navbar
      navToggler.click();
    }
  }

  toggleTheme(): void {
    this.api.toggleTheme();
    this.isDarkTheme = this.api.isDarkTheme();
    this.cdr.detectChanges(); // Force change detection

  }
}
