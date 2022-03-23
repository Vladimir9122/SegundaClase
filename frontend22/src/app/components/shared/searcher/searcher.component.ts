import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  toSearch: string = '';

  @Output() varSearch = new EventEmitter<string>();

  @Input() text:string ='';

  constructor() { }

  ngOnInit(): void {
  }

  search(toSearch: string) {
    this.varSearch.emit(toSearch);
  }

}
