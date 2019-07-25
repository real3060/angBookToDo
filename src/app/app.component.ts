import { Component } from '@angular/core';
import {Model} from "./model";

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ang-book-todo';
  model = new Model();
  getName() {
    return this.model.user
  }
}
