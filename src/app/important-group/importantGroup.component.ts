import {Component, Input, Output, EventEmitter} from '@angular/core';
import {List} from "../todo-list/list";


@Component({
  selector: 'important-group',
  templateUrl: './importantGroup.component.html',
  styleUrls: ['./importantGroup.component.css'],
})
export class ImportantGroupComponent{
  @Input() itemGroup: List|undefined;
  @Output() notify = new EventEmitter();
}
