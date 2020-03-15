import { Component, OnInit } from '@angular/core';
import { CardMetaData } from '../../shared/components/card/card.component';


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public cardDetadata: CardMetaData = new CardMetaData();

  constructor() {
  }

  ngOnInit() {
      const tools = [
          { label: 'Home', icon: 'home', routerLink: '/', externalUrl: '' },
          { label: 'facets', icon: 'filter-outline', routerLink: '/facets', externalUrl: '' },
          { label: 'settings', icon: 'pencil', externalUrl: 'http://www.angular.io' },
          { label: 'notifications', icon: 'bell' },
          { label: 'profile', icon: 'account-circle-outline' }
      ];

      this.cardDetadata.title = 'test title';
      this.cardDetadata.tools = tools;
      this.cardDetadata.menuItems = tools;

  }
}
