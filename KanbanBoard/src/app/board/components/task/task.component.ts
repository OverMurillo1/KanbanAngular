import { Component, Input, OnInit } from '@angular/core';
import { TaskSchema } from 'src/app/core/services/models';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: TaskSchema;

  constructor() {}

  ngOnInit(): void {
  }

}