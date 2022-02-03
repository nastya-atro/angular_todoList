import {Task} from "./todo-list/list";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SaveNoteService{
  noteTasks: Task[] =[];

  saveTaskToNote(task: Task){
    this.noteTasks.push(task)
  }

  getNoteTasks(){
    return this.noteTasks
  }

  deleteTaskFromNote(task: Task){
    const newTasksList = this.noteTasks.filter(t=>t.id!==task.id);
    this.noteTasks=newTasksList;
  }

  clearNote(){
    this.noteTasks=[];
    return this.noteTasks;
  }
}
