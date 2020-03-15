import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  public tools = [
    { label: 'settings', icon: 'pencil'},
    { label: 'notifications', icon: 'bell'},
    { label: 'profile', icon: 'account-circle-outline' }
  ];
}
