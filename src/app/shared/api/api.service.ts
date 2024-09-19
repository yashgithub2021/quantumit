import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const YOUR_ACCESS_KEY = '9yykUwGxYq0OK9WtmLoup4edvRRSSAkA';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'https://api.quantumitinnovation.com/';
  private darkTheme = true;
  private bannerStateSubject = new Subject<boolean>();
  bannerState$ = this.bannerStateSubject.asObservable();
  themeChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private http: HttpClient) {}
  setBannerState(isVisible: boolean) {
    this.bannerStateSubject.next(isVisible);
  }
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
    // console.log(this.darkTheme)
    return this.darkTheme;
  }

  getMembers() {
    return this.http.get(`${this.baseUrl}api/team/team`);
  }

  getReviews() {
    return this.http.get(`${this.baseUrl}api/feedback/feedback`);
  }

  getBlogs() {
    const resultPerPage: number = 100;
    const currentPage: number = 1;
    const params = new HttpParams()
      .set('resultPerPage', resultPerPage.toString())
      .set('currentPage', currentPage.toString());
    return this.http.get(`${this.baseUrl}api/blogs/blog`, { params });
  }

  getBlogDetails(id: any) {
    return this.http.get(`${this.baseUrl}api/blogs/blog?id=${id}`);
  }

  getContributors() {
    return this.http.get(`${this.baseUrl}api/contributor/contributor`);
  }

  getProjects() {
    return this.http.get(`${this.baseUrl}api/projects/project`);
  }

  getMobileAppProjects() {
    return this.http.get(`${this.baseUrl}api/projects/mobile-app-projects`);
  }

  getWebAppProjects() {
    return this.http.get(`${this.baseUrl}api/projects/web-app-projects`);
  }

  getProjectsById(id: any) {
    return this.http.get(`${this.baseUrl}api/projects/project?id=${id}`);
  }

  getFAQ() {
    return this.http.get(`${this.baseUrl}api/faq/faq`);
  }

  saveContactForm(form: any) {
    return this.http.post(`${this.baseUrl}api/contactus/contactus`, form);
  }
  getIpAddress() {
    return this.http.get('https://ipapi.co/json/');
  }
  getLocation(ipData: any) {
    return this.http.get<any>(
      `https://ipinfo.io/${ipData.ip}/json?token=61247512e441c3`
    );
  }
  getCategoryOfBlogs() {
    return this.http.get<any>(`${this.baseUrl}api/categories/getCategories`);
  }
  getBlogsByCategory(category: string) {
    let body = { category };
    return this.http.get<any>(`${this.baseUrl}api/blogs/blogsByCategory`, {
      params: body,
    });
  }
}
