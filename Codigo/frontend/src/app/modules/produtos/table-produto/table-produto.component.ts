import { Component } from '@angular/core';
import { ProdutoElement } from '../produtos.component';

@Component({
  selector: 'app-table-produto',
  templateUrl: './table-produto.component.html',
  styleUrls: ['./table-produto.component.scss']
})
export class TableProdutoComponent {
  displayedColumns: string[] = ['id', 'nome', 'preco', 'categoria_produto'];
  columnAction: string = 'Actions';
  produtos: ProdutoElement[] = [];
}
