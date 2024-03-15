import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos.component';
import { MaterialModule } from 'src/app/material-module';
import { TableProdutoComponent } from './table-produto/table-produto.component';



@NgModule({
  declarations: [
    ProdutosComponent,
    TableProdutoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ProdutosModule { }
