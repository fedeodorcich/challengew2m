import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//-----Material Modules-----

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';




const materialModules = [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ];


@NgModule({
  declarations: [],
  imports: [CommonModule,materialModules],
  exports:[materialModules]
})
export class MaterialModule { }