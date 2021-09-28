import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../core/services/api.service';
import { ListSchema } from './../../core/services/models/listshema';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { TaskSchema } from 'src/app/core/services/models';
import { TaskService } from '../../core/task.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  lists: ListSchema[];
  initialValue = {
    id:'',
    description: '',
    date: new Date(),
    priority:'',
  }

  listId : string;
  task: TaskSchema;

  constructor( private apiService: ApiService, private taskService: TaskService) {
    this.lists = [];
    this.task = this.initialValue;
  }

  ngOnInit(): void {
    //this.getDataList()
    this.getDataStored();
  }

  getDataList(): void{
    this.apiService.getApi().subscribe(
      (response: any) => this.lists = response['list'],
      error => console.error('Ups, ha ocurrido un error', error)
    );
  }

  getDataStored():void{
    this.taskService.getBoardList$.subscribe(
      (response:any) => this.lists = response,
      (error:string) => ( console.log('Error hago paso', error))
    );
  }

  isOverlayDisplayed = false;
  readonly overlayOptions: Partial<CdkConnectedOverlay> = {
    hasBackdrop: true,
    positions: [
      {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'top'
      }
    ]
  };

  displayOverlay( event?: TaskSchema): void{
    this.isOverlayDisplayed = true;
    if (!!event) {
      this.task = {
        date: event.date,
        id: event.id,
        description: event.description,
        priority: event.priority,
      };
    }else {
      this.task = this.initialValue;
    }
    if(event?.listId){
      this.listId = event.listId;
    }
  }

  hideOverlay(): void{
    this.isOverlayDisplayed = false;
  }

}
