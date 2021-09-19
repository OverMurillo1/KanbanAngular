import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../core/services/api.service';
import { ListSchema } from './../../core/services/models/listshema';

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
      (response: any) => this.lists = response['lists'],
      error => console.error('Ups, ha ocurrido un error', error)
    );
  }
}
