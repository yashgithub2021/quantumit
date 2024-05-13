import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  isDarkMode!: boolean
  checks = ["Chatbot API", "Facial Recognition API", "Natural language processing APIs", "AWS ML Solutions"]
  faqs: any
  isHoveringMail: boolean = true;
  isHoveringPhone: boolean = true;
  constructor(private api: ApiService) { }
  ngOnInit(): void {
    this.darkModeCheck()
    this.themechange()
    this.fetchFAQ()
    console.log(this.isDarkMode)
  }

  darkModeCheck() {
    this.isDarkMode = this.api.isDarkTheme()
  }

  themechange() {
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkMode = isDarkTheme;
    });
  }

  fetchFAQ() {
    this.api.getFAQ().subscribe((res: any) => {
      this.faqs = res.faqs
      console.log(this.faqs)
    })
  }
}
