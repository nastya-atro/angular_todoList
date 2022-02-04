import { Component } from '@angular/core';
import {list} from "./list";
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'todo-list',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.css']
})
export class TodoListComponent{
  title = 'ToDo Groups:';
  list = list;

  createNewGroupForm = this.formBuilder.group({
    title: '',
    description: '',
  })

  constructor(private formBuilder: FormBuilder) {
  }

  createNewGroup(){
    this.list.push(
    {
      id: Math.floor((Math.random()*466)+1),
      title: this.createNewGroupForm.value.title,
      description: this.createNewGroupForm.value.description,
      tasks: null
    })
    this.createNewGroupForm.reset()
  }
  deleteGroupById(id: number){
    const newList = this.list.filter(el=> el.id !== id)
    this.list = newList;
  }

  notifyAboutImportant(){
    window.alert('This Group is Important !!!')
  }
}
