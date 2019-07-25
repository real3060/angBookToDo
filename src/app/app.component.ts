import { Component } from '@angular/core';
import {Model} from "./model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ang-book-todo';
  model = new Model();
  getName() {
    return this.model.user
  }
  getItemsList() {
   return  this.model.items
  }
}
