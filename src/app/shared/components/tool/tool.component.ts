import { Component, Input } from '@angular/core';
import { Tool } from '../tool-group/tool-group.component';

@Component({
    selector: 'app-tool',
    templateUrl: './tool.component.html',
    styleUrls: ['./tool.component.scss']
})
export class ToolComponent {
    @Input() color = 'primary';
    @Input() tool: Tool;
    @Input() showLabels: boolean;
}


