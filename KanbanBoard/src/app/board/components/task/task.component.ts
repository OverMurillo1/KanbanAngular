import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskSchema } from 'src/app/core/services/models';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: TaskSchema;
  @Output() editTask: EventEmitter<TaskSchema> = new EventEmitter();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
  }

  handleEditTask(task: TaskSchema){
    this.editTask.emit(task); 
  }

  removeTask(taskId: string):void{
    console.log('Eliminar Tarea', taskId);
    const dialogRef = this.dialog.open(ModalComponent);
    dialogRef.afterClosed().subscribe( res => {
      console.log('Eliminar Tarea', res);
    });
  }


}
