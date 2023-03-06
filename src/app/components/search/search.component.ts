import { Component, Output, EventEmitter } from '@angular/core';
import { SearchParams } from '../../models/search-type';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchParams:SearchParams = {
    id:"",
    name:""
  }

  @Output() searchQuery = new EventEmitter<SearchParams>();

  search(param :string , type:string) {
    type =="name" ? this.searchParams.name = param : this.searchParams.id = param;
    this.searchQuery.emit(this.searchParams);
  }  
}
