import { Component, Input } from '@angular/core';
import { Hero } from '../../models/hero-type';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  
  @Input('heroesData') heroesData:Hero[]=[];
  @Input('totalHeroes') totalHeroes:number=0;
  @Input('pageSize') pageSize:number=0;
  @Input('pageIndex') pageIndex:number=0;

  isLoading:boolean=true

  displayedColumns: string[] = ['position', 'name', 'realName', 'specialPower','actions'];
  
}
