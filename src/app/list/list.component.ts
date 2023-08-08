import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TimeEntry } from '../timeEntry';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() entries: TimeEntry[] = [];
  @Output() onDelete = new EventEmitter();
  @Output() onSelect = new EventEmitter();
}
