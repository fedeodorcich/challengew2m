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

  constructor(private _heroesService: HeroesService) {}

  ngOnInit(): void {
    console.log("onInit called");
    this.getHeroes();
  }

  private getHeroes() {
    this._heroesService.getAllHeroes().subscribe(
      res => {
        console.log(res);
        this.heroesData = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}