import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit{

  heroId: number | null = 0;
  myForm: FormGroup;

  constructor(private fb: FormBuilder,private _heroesService:HeroesService) {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]]
    });
  }

  ngOnInit(): void {
    this.getHero()
  }  

  submit() {
    console.log(this.myForm.value);
  }

  private getHero(){
    if(this.heroId){
      this._heroesService.getHero(this.heroId).subscribe(
        res=>{
          console.log(res)
        },
        err=>{
          console.log(err)
        }
      )
    }
  }

  private createHero(){
    this._heroesService.addHero(this.myForm.value).subscribe(
      res=>{
        console.log(res)
      },
      err=>{
        console.log(err)
      }
    )
  }

  private updateHero(){
    this._heroesService.updateHero(this.myForm.value).subscribe(
      res=>{
        console.log(res)
      },
      err=>{
        console.log(err)
      }
    )
  }

}
