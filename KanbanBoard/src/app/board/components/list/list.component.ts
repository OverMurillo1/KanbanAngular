import { Component, Input, OnInit } from '@angular/core';
import { ListSchema } from './../../../core/services/models/listshema';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() list: ListSchema;

  constructor() { }

  ngOnInit(): void {
  }

}
