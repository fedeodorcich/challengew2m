import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { HeroComponent } from './containers/hero/hero.component';

const routes: Routes = [
  { path: 'home', component: HeroComponent},
  { path: '**', redirectTo:'home' },
  { path: '',pathMatch: 'full',redirectTo: 'home'},
  { path: 'hero/:id',component: HeroComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

