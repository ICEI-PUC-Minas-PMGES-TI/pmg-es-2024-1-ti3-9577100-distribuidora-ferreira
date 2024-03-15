import { Component } from '@angular/core';

@Component({
  selector: 'app-table-produto',
  templateUrl: './table-produto.component.html',
  styleUrls: ['./table-produto.component.scss']
})
export class TableProdutoComponent {
  displayedColumns: string[] = ['id', 'nome', 'preco', 'categoria_produto'];
  columnAction: string = 'Actions';
}
