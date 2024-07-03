import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { androidService, contentMarketingServices, conversionRateOptimizationServices, crossPlatformAppDevelopment, dotNetDevelopmentServices, emailMarketingServices, iOsService, iPadAppDevelopment, internetOfThings, joomlaDevelopmentServices, mobileDevServices, mobileGameDevelopment, nodejsDevelopmentServices, paidSearchAdvertisingServices, payPerClickServices, phpDevelopmentServices, roboticProcessAutomation, rubyOnRailsDevelopmentServices, seoServices, socialMediaServices, swiftAppDevelopment, websiteDevServices } from '../shared/service-data';

@Injectable({
  providedIn: 'root'
})
export class DataService implements Resolve<any> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    if (id === 'android-application-development-company') {
      return of({ title: 'Android App', services: androidService });
    } else if (id === 'iphone-application-development-company') {
      return of({ title: 'iOS App', services: iOsService });
    } else if (id === 'swift-application-development-company') {
      return of({ title: 'swift App', services: swiftAppDevelopment });
    } else if (id === 'cross-platform-mobile-app-development') {
      return of({ title: 'cross Platfom App', services: crossPlatformAppDevelopment });
    } else if (id === 'ipad-app-development-company') {
      return of({ title: 'iPad App', services: iPadAppDevelopment });
    } else if (id === 'mobile-game-development-company') {
      return of({ title: 'mobileGame App', services: mobileGameDevelopment });
    } else if (id === 'iot') {
      return of({ title: 'internet of things', services: internetOfThings });
    } else if (id === 'robotic-process-automation') {
      return of({ title: 'RAP', services: roboticProcessAutomation });
    } else if (id === 'seo-services-company') {
      return of({ title: 'seo Services', services: seoServices });
    } else if (id === 'ppc-campaign-management-services') {
      return of({ title: 'payPerClick Services', services: payPerClickServices });
    } else if (id === 'social-media-marketing') {
      return of({ title: 'socialMedia Services', services: socialMediaServices });
    } else if (id === 'emailMarketing') {
      return of({ title: 'emailMarketing Services', services: emailMarketingServices });
    } else if (id === 'conversionRateOptimization') {
      return of({ title: 'conversionRateOptimization Services', services: conversionRateOptimizationServices });
    } else if (id === 'paidSearch') {
      return of({ title: 'paidSearch Services', services: paidSearchAdvertisingServices });
    } else if (id === 'contentMarketing') {
      return of({ title: 'contentMarketing Services', services: contentMarketingServices });
    } else if (id === 'websiteDev') {
      return of({ title: 'websiteDev Services', services: websiteDevServices });
    } else if (id === 'mobileDev') {
      return of({ title: 'mobileDev Services', services: mobileDevServices });
    } else if (id === 'php-development-company') {
      return of({ title: 'php Services', services: phpDevelopmentServices });
    } else if (id === 'dotnet-development-company') {
      return of({ title: 'dotnet Services', services: dotNetDevelopmentServices });
    } else if (id === 'ruby-on-rails-development-company') {
      return of({ title: 'ror Services', services: rubyOnRailsDevelopmentServices });
    } else if (id === 'node-js-development') {
      return of({ title: 'node Services', services: nodejsDevelopmentServices });
    } else if (id === 'joomla-development-company') {
      return of({ title: 'joomla Services', services: joomlaDevelopmentServices });
    } else {
      return of(null); // Return null for unknown IDs
    }
  }
}
