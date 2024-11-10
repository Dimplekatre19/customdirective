import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../models/post';
import { postarr } from '../../consts/post';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
   posts:Array<Ipost>=postarr
  constructor() { }

  ngOnInit(): void {
  }

}
