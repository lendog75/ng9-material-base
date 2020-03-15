import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tool } from './shared/components/tool-group/tool-group.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public tools: Tool[] = [];

  today: number = Date.now();
  title = 'Analytics Dashboard';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.tools = [
      { label: 'Home', icon: 'home', routerLink: '/', externalUrl: '' },
      { label: 'facets', icon: 'filter-outline', routerLink: '/facets', externalUrl: '' },
      { label: 'settings', icon: 'pencil', externalUrl: 'http://www.angular.io' },
      { label: 'notifications', icon: 'bell' },
      { label: 'profile', icon: 'account-circle-outline' }
    ];
  }
}
