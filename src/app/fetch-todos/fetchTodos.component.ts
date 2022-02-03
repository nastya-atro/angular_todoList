import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'test-routing',
  templateUrl: './fetchTodos.component.html',
  styleUrls: ['./fetchTodos.component.css'],
})
export class FetchTodosComponent {
  todoList: any = [];

  constructor(private http: HttpClient) {
  }

  fetchTodoList(){
    const x = this.http.get('https://jsonplaceholder.typicode.com/todos')
    console.log(x);
    return x
  }

  getTodoList(){
    this.todoList = this.fetchTodoList()
  }

}
