import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { TaskSchema } from 'src/app/core/services/models';

type DropdownObject = {
  value: string;
  viewValue: string;
};


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  createTask: FormGroup;
  selectedPriority: string;

  priorities: DropdownObject[] = [
    { value: 'urgent', viewValue: 'Urgente'},
    { value: 'moderate', viewValue: 'Moderado'},
    { value: 'low', viewValue: 'Bajo'}
  ]


  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  @Input() connectedOverlay: CdkConnectedOverlay;
  @Input() task: TaskSchema;
  formText: string;

  constructor( private fb: FormBuilder, private _ngZone: NgZone) { }

  ngOnInit(): void {
    this.setForm();
    this.selectedPriority = '';
    if (this.task && this.task.id.length > 0) {
      this.setValuesOnForm(this.task);
      this.formText = 'Editar';
      this.selectedPriority = this.task.priority;
    }else{
      this.formText = 'Crear';
    }
  }

  setForm(): void{
    this.createTask = this.fb.group({
      date: [ new Date(), Validators.required],
      priority: [ 'urgent', Validators.required],
      description: ['', Validators.required]
    });
  }

  onFormAdd( form: TaskSchema ): void{
    if( this.createTask.valid ){
      console.log('Valido');
      this.close();
    }else{
      console.log('Editado');
      this.close();
    }
  }

  triggerResize(){
    this._ngZone.onStable
      .pipe(take(1))
      .subscribe( () => this.autosize.resizeToFitContent(true));
  }

  setValuesOnForm(form: TaskSchema):void{
    this.createTask.setValue({
      date: new Date(form.date),
      priority: form.priority,
      description: form.description
    });
  }

  close(): void {
    this.connectedOverlay.overlayRef.detach();
  }
}
