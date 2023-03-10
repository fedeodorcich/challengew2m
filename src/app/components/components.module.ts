import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { SearchComponent } from './search/search.component';
import { TableComponent } from './table/table.component';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    SearchComponent,
    TableComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    SearchComponent,
    TableComponent,
    ModalComponent
    ],
})
export class ComponentsModule { }
