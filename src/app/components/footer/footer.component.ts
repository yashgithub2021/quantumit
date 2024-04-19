import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  facebook = "www.facebook.com/quantumitinnovationindia"

  contacts = [
    {
      icon: 'fa-phone-volume',
      label: 'Tel',
      value: '+ 91 971 799 8517'
    },
    {
      icon: 'fa-envelope',
      label: 'Email',
      value: 'sales@quantumitinnovation.com'
    },
    {
      icon: 'fa-location-dot',
      label: 'Address',
      value: 'India: H-11, 1st Floor, Sector 63, Noida - 201301'
    },
    {
      icon: 'fa-print',
      label: 'Fax',
      value: '+1-212-9876543'
    },
  ]

  pageLabels = [
    {
      heading: 'Quick Links',
      pages: [
        {
          label: "Home",
          link: "/"
        },
        {
          label: 'About Us',
          link: 'company/about'
        },
        {
          label: 'Portfolio',
          link: 'portfolio'
        },
        {
          label: 'Blog',
          link: 'blog'
        },
      ]
    },
    {
      heading: 'Services',
      pages: [
        {
          label: 'Web Development',
          link: 'web-development'
        },
        {
          label: 'App Development',
          link: 'app-development'
        },

        {
          label: 'Digital Marketing',
          link: 'digital-marketing'
        },
        {
          label: 'Artificial Intelligence',
          link: 'artificial-intelligence'
        },
      ]
    },
    {
      heading: 'Contact Us',
      pages: [
        {
          label: 'New Project',
          link: 'company/contact'
        },
        {
          label: 'Careers',
          link: 'company/contact'
        },

        {
          label: 'Inquires',
          link: 'company/contact'
        },

      ]
    },
  ]
}
