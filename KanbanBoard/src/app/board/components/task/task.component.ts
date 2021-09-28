import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskSchema } from 'src/app/core/services/models';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './../../../shared/components/modal/modal.component';
import { ListSchema } from 'src/app/core/services/models';
import { TaskService } from 'src/app/core/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: TaskSchema;
  @Output() editTask: EventEmitter<TaskSchema> = new EventEmitter();
  @Input() list?: ListSchema;

  constructor(private dialog: MatDialog, public taskService:TaskService ) {}

  ngOnInit(): void {
  }

  handleEditTask(task: TaskSchema){
    this.editTask.emit(task);
  }

  removeTask(taskId: string):void{
    console.log('Eliminar Tarea', taskId);
    const dialogRef = this.dialog.open(ModalComponent);
    dialogRef.afterClosed().subscribe( (res) => {
      if (this.list){
        this.taskService.removeTask(taskId, this.list);
      }
    });
  }


}
