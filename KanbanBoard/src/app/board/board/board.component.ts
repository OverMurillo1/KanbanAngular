import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../core/services/api.service';
import { ListSchema } from './../../core/services/models/listshema';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  lists: ListSchema[];

  constructor( private apiService: ApiService) { 
    this.lists = [];
  }

  ngOnInit(): void {
    this.getDataList()
  }

  getDataList(): void{
    this.apiService.getApi().subscribe(
      (response: any) => this.lists = response['list'],
      error => console.error('Ups, ha ocurrido un error', error)
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

  displayOverlay(): void{
    this.isOverlayDisplayed = true;
  }

  hideOverlay(): void{
    this.isOverlayDisplayed = false;
  }

}
