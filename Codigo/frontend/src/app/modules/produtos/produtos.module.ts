import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos.component';
import { MaterialModule } from 'src/app/material-module';
import { TableProdutoComponent } from './table-produto/table-produto.component';
import { TableCategoriaComponent } from './table-categoria/table-categoria.component';



@NgModule({
  declarations: [
    ProdutosComponent,
    TableProdutoComponent,
    TableCategoriaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ProdutosModule { }
