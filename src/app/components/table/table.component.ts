import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../models/hero-type';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {


  
  @Input('heroesData') heroesData:Hero[]=[];
  @Input('isLoading') isLoading:boolean=true;
  @Output() showDeleteModal = new EventEmitter<Hero>()

  displayedColumns: string[] = ['position', 'name', 'realName', 'specialPower','actions'];

   setHero(hero:Hero){this.showDeleteModal.emit(hero)}
  
}
