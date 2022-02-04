import { Component } from '@angular/core';
import {FetchDataService} from "../fetchData.service";


@Component({
  selector: 'test-routing',
  templateUrl: './fetchTodos.component.html',
  styleUrls: ['./fetchTodos.component.css'],
})
export class FetchTodosComponent {
  todoList: any = [];

  constructor(private fetchDataService: FetchDataService) {
  }


  getTodoList(){
    this.fetchDataService.fetchTodoList().subscribe((data: any)=>this.todoList = data)
  }

}
