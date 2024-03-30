import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

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
      heading: 'About',
      pages: [
        {
          label: 'About Us',
          link: ''
        },
        {
          label: 'Blog',
          link: ''
        },

        {
          label: 'Careers',
          link: ''
        },
        {
          label: 'Careers',
          link: ''
        },
        {
          label: 'In Press',
          link: ''
        },
        {
          label: 'Gallery',
          link: ''
        },

      ]
    },
    {
      heading: 'Support',
      pages: [
        {
          label: 'Contact Us',
          link: ''
        },
        {
          label: 'Online Chat',
          link: ''
        },

        {
          label: 'Whatsapp',
          link: ''
        },
        {
          label: 'Telegram',
          link: ''
        },
        {
          label: 'Ticketing',
          link: ''
        },
        {
          label: 'Call Center',
          link: ''
        },

      ]
    },
    {
      heading: 'FAQ',
      pages: [
        {
          label: 'Account',
          link: ''
        },
        {
          label: 'Manage Deliveries',
          link: ''
        },

        {
          label: 'Orders',
          link: ''
        },
        {
          label: 'Payments',
          link: ''
        },
        {
          label: 'Returns',
          link: ''
        },
        {
          label: 'Privacy Policy',
          link: ''
        },

      ]
    },
  ]
}
