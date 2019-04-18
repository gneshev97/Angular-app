import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() ingredient: Ingredient[];

  constructor() {
  }
   
  ngOnInit() {
  }

}
