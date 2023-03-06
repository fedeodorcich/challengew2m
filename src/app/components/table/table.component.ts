import { Component, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Hero } from '../../models/hero-type';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {


  
  @Input('heroesData') heroesData:Hero[]=[];
   @Input('isLoading') isLoading:boolean=true;

  displayedColumns: string[] = ['position', 'name', 'realName', 'specialPower','actions'];
  
}
