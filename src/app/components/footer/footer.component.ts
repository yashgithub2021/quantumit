import { Component, ElementRef, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isDarkMode!: boolean
  isExpanded: boolean = false;

  constructor(private api: ApiService, private elementRef: ElementRef) { }

  


  facebook = "www.facebook.com/quantumitinnovationindia"

  contacts = [
    {
      icon: 'fa-phone',
      hoverIcon: 'fa-phone-volume',
      label: 'Tel',
      value: '+ 91 971 799 8517',
      link: 'tel:91 971 799 8517'
    },
    {
      icon: 'fa-envelope',
      hoverIcon: 'fa-envelope-open',
      label: 'Email',
      value: 'sales@quantumitinnovation.com',
      link: 'mailto:sales@quantumitinnovation.com'
    },
    {
      icon: 'fa-location-dot',
      hoverIcon: 'fa-location-pin',
      label: 'Address',
      value: 'A20 Knowledge Park-II, Greater Noida, UP -201310'
    },
    // {
    //   icon: 'fa-print',
    //   hoverIcon: 'fa-fax',
    //   label: 'Fax',
    //   value: '+1-212-9876543',
    //   link: 'fax:+1.212.9876543'
    // },
  ]
  isHovering: boolean[] = [];

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
          label: 'Contact',
          link: 'company/contact'
        }
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
        }
      ]
    },
    {
      heading: 'Company Details',
      pages: [
        {
          label: 'Privacy Policy',
          link: 'company/privacy-policy'
        },
        {
          label: 'Terms and Condition',
          link: 'company/terms-and-condition'
        },
        {
          label: 'Refund and Return Policy',
          link: 'company/refund-cancellation-policy'
        },
        {
          label: 'Inquires',
          link: 'company/contact'
        },

      ]
    },
  ]

  ngOnInit(): void {
    this.darkModeCheck()
    console.log(this.isDarkMode)
    this.contacts.forEach(() => {
      this.isHovering.push(false);
    });
  }
  toggleReadMore() {
    this.isExpanded = !this.isExpanded;
  }

  darkModeCheck() {
    this.isDarkMode = this.api.isDarkTheme()
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkMode = isDarkTheme;
      // Perform actions based on theme change
    });
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  scrollToGetServices() {
    const footer = this.elementRef.nativeElement.querySelector('#services');
    if (footer) {
      console.log(true)
      footer.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }
}
