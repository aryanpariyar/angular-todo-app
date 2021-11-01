import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-App';
 constructor(){
  // setTimeout(() => {
  //   this.title = "Todo App Title Changed";
  // }, 2000);
 }
}
