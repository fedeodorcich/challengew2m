import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit{

  heroId: number | null = null;
  heroForm: FormGroup;

  constructor(private fb: FormBuilder,private _heroesService:HeroesService , private _snackBar: MatSnackBar ,  private activatedRoute: ActivatedRoute, private _router:Router) {
    this.heroId = Number(this.activatedRoute.snapshot.paramMap.get('id')) ?? null;
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      realName: ['', Validators.required],
      specialPower: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.getHero()
  }  

  submitForm() {
    if(this.heroId || this.heroId==0){
      this.updateHero()
    }else{
      this.createHero()
    }
  }

  private getHero(){
    if(this.heroId || this.heroId==0){
      this._heroesService.getHero(this.heroId).subscribe(
        res=>{
          this.heroForm.patchValue({
            name: res.name,
            realName: res.realName,
            specialPower: res.specialPower
          });
        },
        err=>{
          console.log(err)
        }
      )
    }
  }

  private createHero(){
    this._heroesService.addHero(this.heroForm.value).subscribe(
      res=>{
        this.heroForm.reset()
        this.openSnackBar("Hero created sucessfully","Ok")
      },
      err=>{
        console.log(err)
      }
    )
  }

  private updateHero(){
    this._heroesService.updateHero(this.heroId ,this.heroForm.value).subscribe(
      res=>{
        this.openSnackBar("Hero updated sucessfully","Ok");
        this._router.navigate(['/home']);
      },
      err=>{
        console.log(err)
      }
    )
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
