import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, switchMap } from 'rxjs';
import { NavItem } from './nav-item';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private httpClient: HttpClient) { }

  getItems() {
    var pollInterval = 1000;
    const httpObservable = interval(pollInterval).pipe(
      switchMap(x => this.httpClient.get<NavItem[]>('assets/menu-items.json'))
    )
    return httpObservable;

    // return this.httpClient.get<NavItem[]>('assets/menu-items.json');
  }
}
