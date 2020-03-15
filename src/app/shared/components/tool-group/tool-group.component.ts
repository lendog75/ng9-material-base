import { Component, Input } from '@angular/core';

export class Tool {
  label?: string;
  icon?: string;
  routerLink?: string;
  externalUrl?: string;
}

export class ToolGroup {
  label: string;
  tools: Tool[];
}


@Component({
  selector: 'app-tool-group',
  templateUrl: './tool-group.component.html',
  styleUrls: ['./tool-group.component.scss']
})
export class ToolGroupComponent {
  @Input() color: '';
  @Input() public showLabels = false;
  @Input() public tools: Tool[];
}
