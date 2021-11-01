import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { TodoItemsComponent } from './MyComponents/todo-items/todo-items.component';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './MyComponents/about/about.component';
import { ServicesComponent } from './MyComponents/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemsComponent,
    AddTodoComponent,
    AboutComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
