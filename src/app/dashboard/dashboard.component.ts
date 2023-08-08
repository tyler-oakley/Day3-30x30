import { Component } from '@angular/core';
import { TimeEntry } from '../timeEntry';
import { ENTRIES } from './mock-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  listOfEntries = ENTRIES;
  selectedEntry = new TimeEntry('');
  entryAlreadyExists: boolean = false;

  save(entryInfo: string) {

    for (let entry of this.listOfEntries) {
      if (entry.content == entryInfo) {
        this.entryAlreadyExists = true;
      }
    }

    if (this.entryAlreadyExists) {
      alert("Item saved");
      this.selectedEntry = new TimeEntry('');
    }
    else {
      this.addEntry(entryInfo);
    }

    // reset boolean to await input from next entry
    this.entryAlreadyExists = false;
  }

  delete(entryToDelete: TimeEntry) {
    const entries = [...this.listOfEntries];
    this.listOfEntries = entries.filter(entry => entry.content !== entryToDelete.content);
  }

  entrySelected(selectedEntry: TimeEntry) {
    this.selectedEntry = selectedEntry;
  }

  addEntry(entryInfo: string) {
    if (entryInfo) {
      let newEntry = new TimeEntry(entryInfo);
      this.listOfEntries.push(newEntry);
      this.selectedEntry = new TimeEntry('');
    }
    else {
      alert("Error: You cannot add a blank entry.");
    }
  }

  clear() {
    this.selectedEntry = new TimeEntry('');
  }
}
