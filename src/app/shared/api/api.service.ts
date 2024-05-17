import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://quantumitbackend.adaptable.app/'
  private darkTheme = true;
  themeChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  setDarkTheme(isDarkTheme: boolean): void {
    this.darkTheme = isDarkTheme;
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }

  toggleTheme(): void {
    this.darkTheme = !this.darkTheme;
    this.setDarkTheme(this.darkTheme);
    this.themeChanged.emit(this.darkTheme);
  }

  isDarkTheme(): boolean {
    console.log(this.darkTheme)
    return this.darkTheme;
  }

  getMembers() {
    return this.http.get(`${this.baseUrl}api/team/team`)
  }

  getReviews() {
    return this.http.get(`${this.baseUrl}api/feedback/feedback`)
  }

  getBlogs() {
    return this.http.get(`${this.baseUrl}api/blogs/blog`)
  }

  getBlogDetails(id: any) {
    return this.http.get(`${this.baseUrl}api/blogs/blog?id=${id}`)
  }

  getContributors() {
    return this.http.get(`${this.baseUrl}api/contributor/contributor`)
  }

  getProjects() {
    return this.http.get(`${this.baseUrl}api/projects/project`)
  }

  getMobileAppProjects() {
    return this.http.get(`${this.baseUrl}api/projects/mobile-app-projects`)
  }

  getWebAppProjects() {
    return this.http.get(`${this.baseUrl}api/projects/web-app-projects`)
  }

  getProjectsById(id: any) {
    return this.http.get(`${this.baseUrl}api/projects/project?id=${id}`)
  }

  getFAQ() {
    return this.http.get(`${this.baseUrl}api/faq/faq`);
  }

  saveContactForm(form: any) {
    return this.http.post(`${this.baseUrl}api/contactus/contactus`, form)
  }
}
