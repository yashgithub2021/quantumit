import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  closeNavbar() {
    // Check if the navbar is collapsed
    const navToggler = document.querySelector('.navbar-toggler') as HTMLButtonElement | null;
    if (navToggler && navToggler.getAttribute('aria-expanded') === 'true') {
      // Collapse the navbar
      navToggler.click();
    }
  }
}
