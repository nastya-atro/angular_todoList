import { Component } from '@angular/core';
import {list} from "./list";

@Component({
  selector: 'todo-list',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.css']
})
export class TodoListComponent{
  title = 'ToDo Groups:';
  list = list;

  createNewGroup(){
    this.list.push(
    {
      id: Math.floor((Math.random()*466)+1),
      title: 'New Group',
      description: 'Some descriptions about new group',
      tasks: null
    })
  }
  deleteGroupById(id: number){
    const newList = this.list.filter(el=> el.id !== id)
    this.list = newList;
  }

  notifyAboutImportant(){
    window.alert('This Group is Important !!!')
  }
}
