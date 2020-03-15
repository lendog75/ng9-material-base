import { Component, Input } from '@angular/core';
import { Tool } from '../tool-group/tool-group.component';

export class CardMetaData {
  public title: string;
    public tools: Tool[];
    public menuItems: Tool[];
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() public metadata: CardMetaData;

  public tools = [
    { label: 'settings', icon: 'pencil'},
    { label: 'notifications', icon: 'bell'},
    { label: 'profile', icon: 'account-circle-outline' }
  ];
}
