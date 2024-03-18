import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos.component';
import { MaterialModule } from 'src/app/material-module';
import { TableProdutoComponent } from './table-produto/table-produto.component';
import { TableCategoriaComponent } from './table-categoria/table-categoria.component';
import { DialogNovoProdutoComponent } from './dialog-novo-produto/dialog-novo-produto.component';
import { SharedModule } from '../shared/shared.module';
import { DialogNovaCategoriaComponent } from './dialog-nova-categoria/dialog-nova-categoria.component';



@NgModule({
  declarations: [
    ProdutosComponent,
    TableProdutoComponent,
    TableCategoriaComponent,
    DialogNovoProdutoComponent,
    DialogNovaCategoriaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ]
})
export class ProdutosModule { }
