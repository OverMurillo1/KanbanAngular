import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ApiService } from 'src/app/core/services';
import { ListSchema, TaskSchema } from 'src/app/core/services/models';
import { TaskService } from 'src/app/core/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  taskList: TaskSchema[];

  constructor( private apisService: ApiService, private taskService: TaskService) { }

  ngOnInit(): void {}

  getPrioritiesTask(priorityType: string): void {
    this.taskService.getBoardList$
      .subscribe(
        (response: ListSchema[]) => {
          const list = response;
          let tasks: TaskSchema[]= [];
          list.map( (element: ListSchema) => {
            element.tasks.map( (task:TaskSchema) => {
              if (task.priority == priorityType) {
                tasks.push(task)
              }
            });
          });
          this.taskList = tasks;
        },
        (error: string) => (console.log('Eror ome', error))
      );
  }
}
