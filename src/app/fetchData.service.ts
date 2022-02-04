import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class FetchDataService{

  constructor(private http: HttpClient) {
  }

  fetchTodoList(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }

}
