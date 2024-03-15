import { Component } from '@angular/core';
import { categoria_ProdutoElement } from '../produtos.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-categoria',
  templateUrl: './table-categoria.component.html',
  styleUrls: ['./table-categoria.component.scss']
})
export class TableCategoriaComponent {
  displayedColumns: string[] = ['id', 'nome'];
  columnAction: string = 'Actions';
  categorias: categoria_ProdutoElement[] = [];
  dataSource!: MatTableDataSource<categoria_ProdutoElement>;
}
