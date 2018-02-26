import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;


  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  managers = [
    { name: 'kestuf@devoteamgcloud.com' },
    { name: 'vincent.mary@devoteamgcloud.com' },
    { name: 'thomas.decaux@devoteamgcloud.com' },
  ];


  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add a new manager
    if ((value || '').trim()) {
      this.managers.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  // Delete one manager
  remove(manager: any): void {
    let index = this.managers.indexOf(manager);

    if (index >= 1) {
      this.managers.splice(index, 1);
    }
  }


}
