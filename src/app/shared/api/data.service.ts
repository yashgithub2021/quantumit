import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { androidService, iOsService, swiftAppDevelopment } from '../shared/service-data';

@Injectable({
  providedIn: 'root'
})
export class DataService implements Resolve<any> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    if (id === 'android') {
      console.log(androidService)
      return of({ title: 'Android App', services: androidService });
    } else if (id === 'ios') {
      return of({ title: 'iOS App', services: iOsService });
    } else if (id === 'swift') {
      return of({ title: 'swift App', services: swiftAppDevelopment });
    } else {
      return of(null); // Return null for unknown IDs
    }
  }
}
