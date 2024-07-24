import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isDarkTheme!: boolean;
  isDropdownOpenService = false;
  isDropdownOpenCaseStudy=false;


  constructor(private api: ApiService, private cdr: ChangeDetectorRef) {
    this.isDarkTheme = this.api.isDarkTheme();
  }

  closeNavbar() {
    // Check if the navbar is collapsed
    this.scrollToTop();
    const navToggler = document.querySelector('.navbar-toggler') as HTMLButtonElement | null;
    console.log(navToggler);
    if (navToggler && navToggler.getAttribute('aria-expanded') === 'true') {
      // Collapse the navbar
      navToggler.click();
    }
    this.isDropdownOpenService=false;
    this.isDropdownOpenCaseStudy=false;
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleTheme(): void {
    this.api.toggleTheme();
    this.isDarkTheme = this.api.isDarkTheme();
    this.cdr.detectChanges(); // Force change detection

  }
  toggleDropdown(isOpen: boolean) {
    this.isDropdownOpenService = isOpen;    
    console.log('hi1');

  }
  toggleDropdownCaseStudy(isOpen:boolean){
    this.isDropdownOpenCaseStudy=isOpen;
    console.log('hi');
  }
}
