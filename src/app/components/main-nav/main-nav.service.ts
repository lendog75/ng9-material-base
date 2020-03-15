import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


export class NavItem {
  label?: string;
  icon?: string;
  routerLink?: string;
  externalUrl?: string;
}

@Injectable({
  providedIn: 'root',
})
export class MainNavService {
  public navItems$: Observable<NavItem[]>;

  constructor() {
    const val = [
      { label: 'Item A' },
      { label: 'Item B' },
      { label: 'Item C' },
      { label: 'Item D' }
    ];
    this.navItems$ = of(val);
  }
}
