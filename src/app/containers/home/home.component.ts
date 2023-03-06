import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../models/hero-type';
import { Pagination } from '../../models/pagination-type';
import { SearchParams } from '../../models/search-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  heroesData: Hero[] = [];
  heroesDataFiltered: Hero[] = [];
  isLoading:boolean=true;
  
  //------Parámetros para paginado
  paginationData:Pagination={
    pageSize:5,
    pageIndex:0,
    previousPageIndex:0,
    length:0
  }
  totalHeroes:number=0;

  //------Parámetros para búsqueda
  searchNameParam: string = '';
  searchIdParam: string = '';

  constructor(private _heroesService: HeroesService,private router:Router) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.isLoading=true
    this._heroesService.getAllHeroes().subscribe(
      res => {
        this.heroesData = res;
        this.heroesDataFiltered = res;
        this.totalHeroes=res.length;
        setTimeout(()=>{
          this.isLoading=false
        },1000)
        this.paginateData()
      },
      err => {console.log(err);this.isLoading=false}
    );
  }

  navigate(){
    this.router.navigate(['hero'])
  }

  paginateData() {
    const start = this.paginationData.pageIndex * this.paginationData.pageSize;
    const end = start + this.paginationData.pageSize;
    return this.heroesDataFiltered.slice(start, end);
  }

  changePaginationData(event: any) {
    this.paginationData.pageIndex = event.pageIndex;
    this.paginationData.pageSize = event.pageSize;
  }

  searchHeroes(value:SearchParams) {
    this.heroesDataFiltered = [];
    
    if(value.id && value.name){ //en caso de que se busque que coincida el id y el nombre del heroe buscado
      this.heroesData.map((hero:Hero)=>{
        hero.id.toString() == value.id && hero.name.toLowerCase().includes(value.name.toLowerCase()) && this.heroesDataFiltered.push(hero)
      })
    }else{
       if (value.id) { //en caso de que se busque que coincida el id del heroe
        this.heroesData.map((hero:Hero)=>{
          hero.id.toString() == value.id && this.heroesDataFiltered.push(hero)
        })
      } 
      if (value.name){ //en caso de que se busque que coincida el nombre del heroe
        this.heroesData.map((hero:Hero)=>{
          hero.name.toLowerCase().includes(value.name.toLowerCase()) && this.heroesDataFiltered.push(hero)
        })
      }
    }
   
    if (value.id=="" && value.name=="") this.heroesDataFiltered = this.heroesData;
    this.paginationData.pageIndex = 0;
  }
}