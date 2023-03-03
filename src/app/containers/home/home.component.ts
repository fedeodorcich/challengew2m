import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../models/hero-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  heroesData: Hero[] = [];
  
  pageSize:number = 10;
  pageIndex:number = 0;
  totalHeroes:number=0;

  constructor(private _heroesService: HeroesService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  private getHeroes() {
    this._heroesService.getAllHeroes().subscribe(
      res => {
        this.heroesData = res;
        this.totalHeroes = this.heroesData.length
      },
      err => {console.log(err);}
    );
  }
}