import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos.component';
import { MaterialModule } from 'src/app/material-module';



@NgModule({
  declarations: [
    ProdutosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ProdutosModule { }
