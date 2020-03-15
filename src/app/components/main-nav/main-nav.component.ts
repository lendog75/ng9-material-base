import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MainNavService, NavItem } from './main-nav.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
public navs$: Observable<NavItem[]>;
  constructor(private navSvc: MainNavService) {
  }

  ngOnInit() {
    this.navs$ = this.navSvc.navItems$;
  }
}
