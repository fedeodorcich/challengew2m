import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../models/hero-type';
import { Pagination } from '../../models/pagination-type';
import { SearchParams } from '../../models/search-type';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../components/modal/modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  

  constructor(private _heroesService: HeroesService, public dialog: MatDialog, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  private getHeroes() {
    this.isLoading=true
    this._heroesService.getAllHeroes().subscribe(
      res => {
        this.heroesData = res;
        this.heroesDataFiltered = res;
        this.totalHeroes=res.length;
        setTimeout(()=>{ //agregué timeout solo para que se visualice el spinner
          this.isLoading=false
        },500)
        this.paginateData()
      },
      err => {console.log(err);this.isLoading=false}
    );
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


  showDeleteModal(value:Hero){
    this.openDialog('10ms','10ms',value)
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    hero: Hero
  ): void {
    let dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    let instance = dialogRef.componentInstance;
    instance.modelText = {
      title: `Delete hero "${hero.name}"?`,
      description: 'This option has no way back.',
      buttonAccept: 'Delete',
      buttonCancel: 'Cancel',
    };
    instance.dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) this.deleteHero(hero.id)
    });
  }
  


  private deleteHero(heroId:number){
    this._heroesService.deleteHero(heroId).subscribe(
      res=>{
      this.openSnackBar("Hero deleted", "Ok")
      this.getHeroes()
      },
      err=>{this.openSnackBar("Error", "Ok")}
    )
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  
}