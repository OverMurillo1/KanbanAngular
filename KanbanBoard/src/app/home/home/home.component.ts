import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ApiService } from 'src/app/core/services';
import { ListSchema, TaskSchema } from 'src/app/core/services/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  taskList: TaskSchema[];

  constructor( private apisService: ApiService) { }

  ngOnInit(): void {}

  getPrioritiesTask(priorityType: string): void {
    this.apisService.getApi().subscribe(
      (response: any) => {
        const lists = response['list'];
        let tasks: TaskSchema[] = [];
        lists.map((element: ListSchema) => {
          element.tasks.map((task) => {
            if (task.priority === priorityType) {
              tasks.push(task);
            }
          });
        });
        this.taskList = tasks;
      },
      (error) => console.log('Ups! we have an error: ', error)
    );
  }
}
