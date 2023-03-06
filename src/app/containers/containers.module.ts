import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { MaterialModule } from '../material.module';
import { ComponentsModule } from '../components/components.module';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent
  ],
  imports: [
    MaterialModule,
    ComponentsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    HeroComponent
    ],
})
export class ContainerModule { }
