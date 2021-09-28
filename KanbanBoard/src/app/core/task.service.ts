import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './services';
import { ListSchema, TaskSchema } from './services/models';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly boardList = new BehaviorSubject<ListSchema[]>([]);
  readonly list$ = this.boardList.asObservable();
  readonly getBoardList$ = this.list$.pipe( map((list) => list))

  constructor( private apiService: ApiService) {
    this.loadInitialData();
  }

  loadInitialData():any{
    return this.apiService.getApi().subscribe( (response:any) => {
      if(!!response){
        this.boardList.next(response['list']);
      }
    });
  }

  get list(): ListSchema[]{
    return this.boardList.getValue();
  }

  set list(value: ListSchema[]){
    this.boardList.next(value);
  }

  addTask(data: TaskSchema):void{
    const card = data;
    const elementsIndex = this.list.findIndex(
      (element) => element.id === '1'
    );
    this.list[elementsIndex].tasks.push(card);
  }

  updateTask(data: TaskSchema, listId: string):void{
    if (data) {
      const elementsIndex = this.list.findIndex(
        (element) => element.id === listId
      );
      const  task = this.list[elementsIndex].tasks.map( (element) => {
        if (element.id === data.id) {
          element.date = new Date(data.date);
          element.description = data.description;
          element.priority = data.priority;
        }
        return element
      });
    }
  }

  removeTask( dataId: string, list: ListSchema):void{
    const elementsIndex = this.list.findIndex(
      (element) => element.id == list.id
    );
    const tasks = this.list[elementsIndex].tasks.filter(
      (task) => task.id !== dataId
    );
    this.list[elementsIndex].tasks = tasks;
  }
}
