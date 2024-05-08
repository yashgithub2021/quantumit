import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { androidService, contentMarketingServices, conversionRateOptimizationServices, crossPlatformAppDevelopment, dotNetDevelopmentServices, emailMarketingServices, iOsService, iPadAppDevelopment, joomlaDevelopmentServices, mobileDevServices, mobileGameDevelopment, nodejsDevelopmentServices, paidSearchAdvertisingServices, payPerClickServices, phpDevelopmentServices, rubyOnRailsDevelopmentServices, seoServices, socialMediaServices, swiftAppDevelopment, websiteDevServices } from '../shared/service-data';

@Injectable({
  providedIn: 'root'
})
export class DataService implements Resolve<any> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    if (id === 'android') {
      return of({ title: 'Android App', services: androidService });
    } else if (id === 'ios') {
      return of({ title: 'iOS App', services: iOsService });
    } else if (id === 'swift') {
      return of({ title: 'swift App', services: swiftAppDevelopment });
    } else if (id === 'crossPlatform') {
      return of({ title: 'cross Platfom App', services: crossPlatformAppDevelopment });
    } else if (id === 'iPad') {
      return of({ title: 'iPad App', services: iPadAppDevelopment });
    } else if (id === 'mobileGame') {
      return of({ title: 'mobileGame App', services: mobileGameDevelopment });
    } else if (id === 'seoServices') {
      return of({ title: 'seo Services', services: seoServices });
    } else if (id === 'payPerClick') {
      return of({ title: 'payPerClick Services', services: payPerClickServices });
    } else if (id === 'socialMedia') {
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
    } else if (id === 'php') {
      return of({ title: 'php Services', services: phpDevelopmentServices });
    } else if (id === 'dotnet') {
      return of({ title: 'dotnet Services', services: dotNetDevelopmentServices });
    } else if (id === 'ror') {
      return of({ title: 'ror Services', services: rubyOnRailsDevelopmentServices });
    } else if (id === 'node') {
      return of({ title: 'node Services', services: nodejsDevelopmentServices });
    } else if (id === 'joomla') {
      return of({ title: 'joomla Services', services: joomlaDevelopmentServices });
    } else {
      return of(null); // Return null for unknown IDs
    }
  }
}
