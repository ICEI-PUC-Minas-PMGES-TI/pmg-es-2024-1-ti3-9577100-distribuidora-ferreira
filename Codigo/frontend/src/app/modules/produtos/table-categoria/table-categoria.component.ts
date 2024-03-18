import { Component, OnInit } from '@angular/core';
import { categoria_produto } from '../produtos.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-categoria',
  templateUrl: './table-categoria.component.html',
  styleUrls: ['./table-categoria.component.scss']
})
export class TableCategoriaComponent{
  displayedColumns: string[] = ['id', 'nome'];
  columnAction: string = 'Actions';
  categorias: categoria_produto[] = [];
  dataSource!: MatTableDataSource<categoria_produto>;

}
