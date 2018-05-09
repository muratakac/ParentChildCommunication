import { AfterViewInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { CategoryComponent } from './category/category.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(CategoryComponent)
  private categoryComponent: CategoryComponent;

  callChild() {
    this.categoryComponent.showMessage();
  }

  showAlert() {
    alert("Parent");
  }
}
