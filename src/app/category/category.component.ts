import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  @Output() showAlert = new EventEmitter();

  callParent() {
    this.showAlert.emit();
  }

  constructor() { }

  showMessage() {
    alert("CategoryChild");
  }
}
