import { Component } from '@angular/core';

@Component({
  selector: 'app-table-categoria',
  templateUrl: './table-categoria.component.html',
  styleUrls: ['./table-categoria.component.scss']
})
export class TableCategoriaComponent {
  displayedColumns: string[] = ['id', 'nome'];
  columnAction: string = 'Actions';
}
