import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hightlighttext',
  templateUrl: './hightlighttext.component.html',
  styleUrls: ['./hightlighttext.component.scss']
})
export class HightlighttextComponent implements OnInit {
searchText:string=''
  constructor() { }

  ngOnInit(): void {
  }

}
