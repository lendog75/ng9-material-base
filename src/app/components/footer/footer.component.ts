import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public tools = [
    { label: 'Home', icon: 'home',  routerLink: '/', externalUrl: ''},
    { label: 'facets', icon: 'filter-outline', routerLink: '/facets', externalUrl: '' },
  ];
}
