import { Component, Input } from '@angular/core';
import { Hero } from '../../models/hero-type';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  
  @Input('heroesData') heroesData:Hero[]=[];

  displayedColumns: string[] = ['position', 'name', 'realName', 'specialPower'];
  
}
