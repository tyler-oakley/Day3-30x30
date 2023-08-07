import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TimeEntry } from '../timeEntry';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  @Input() selectedEntry = new TimeEntry('');
  @Output() onSave = new EventEmitter();
  @Output() onClear = new EventEmitter();
}
