import { Component } from '@angular/core';
import { Hero } from '../../models/hero-type';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  
  superHeroes: Hero[] = [
    {
      id: 0,
      name: "Batman",
      realName: "Bruce Wayne",
      height: 6.2,
      weight: 210,
      specialPower: "Wealthy",
    },
    {
      id: 1,
      name: "Superman",
      realName: "Clark Kent",
      height: 6.2,
      weight: 220,
      specialPower: "Super strength",
    },
    {
      id: 2,
      name: "Spiderman",
      realName: "Peter Parker",
      height: 5.10,
      weight: 165,
      specialPower: "Web-slinging",
    },
    {
      id: 3,
      name: "Iron Man",
      realName: "Tony Stark",
      height: 6.1,
      weight: 225,
      specialPower: "Powered suit",
    },
    {
      id: 4,
      name: "Wonder Woman",
      realName: "Diana Prince",
      height: 6.0,
      weight: 150,
      specialPower: "Super strength",
    },
  ];

  displayedColumns: string[] = ['position', 'name', 'realName', 'specialPower'];
  
}
