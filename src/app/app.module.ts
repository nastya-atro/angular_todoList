import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import {TodoListComponent} from "./todo-list/todoList.component";
import {GroupListComponent} from "./group-list/groupList.component";
import {ImportantGroupComponent} from "./important-group/importantGroup.component";
import {FetchTodosComponent} from "./fetch-todos/fetchTodos.component";
import {TaskListComponent} from "./task-list/taskList.component";
import {SaveNoteComponent} from "./save-note/saveNote.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "./header/header.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    GroupListComponent,
    ImportantGroupComponent,
    FetchTodosComponent,
    TaskListComponent,
    SaveNoteComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: TodoListComponent},
      {path: 'group/:groupId', component: GroupListComponent},
      {path: 'fetchTodos', component: FetchTodosComponent},
      {path: 'saveNote', component: SaveNoteComponent},
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
