import {Component, Input} from '@angular/core';
import { Task} from "../todo-list/list";
import {SaveNoteService} from "../saveNote.service";


@Component({
  selector: 'save-note',
  templateUrl: './saveNote.component.html',
  styleUrls: ['./saveNote.component.css'],
})
export class SaveNoteComponent{

  noteTasks = this.noteService.getNoteTasks()

  constructor(private noteService: SaveNoteService) {

  }

  deleteTaskFromNote(task: Task){
    this.noteService.deleteTaskFromNote(task);
    this.noteTasks = this.noteService.getNoteTasks();
  }

  clearNote(){
    this.noteService.clearNote()
    this.noteTasks = this.noteService.getNoteTasks();
  }
}

