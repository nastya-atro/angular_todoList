import {Component, Input} from '@angular/core';
import { Task} from "../todo-list/list";
import {SaveNoteService} from "../saveNote.service";


@Component({
  selector: 'task-list',
  templateUrl: './taskList.component.html',
  styleUrls: ['./taskList.component.css'],
})
export class TaskListComponent{
  @Input() tasks: Task[] =[];



  constructor(private noteService: SaveNoteService) {
  }

  toggleNoteTask(task: Task){
    this.checkExistTaskInNote(task.id) ? this.removeTaskFromNote(task) : this.addTaskToNote(task)
  }

  removeTaskFromNote(task: Task){
    this.noteService.
    deleteTaskFromNote(task)
    window.alert('Your task has been REMOVED to the note!');
  }

  addTaskToNote(task: Task){
    this.noteService.saveTaskToNote(task)
    window.alert('Your task has been ADDED to the note!');
  }

  checkExistTaskInNote(id:  number){
    const serviceTasks = this.noteService.getNoteTasks();
    return serviceTasks.find(t=>t.id===id)
  }

  addTask(){
    this.tasks.push({
      id: Math.floor((Math.random()*466)+1),
      name: 'New task',
      isDone: false,
    })
  }

  deleteTask(taskId: number){
    const newTasksList = this.tasks.filter(t=>t.id!==taskId);
    this.tasks=newTasksList;
  }

  clearAllTasks(){
    this.tasks=[];
  }


}

