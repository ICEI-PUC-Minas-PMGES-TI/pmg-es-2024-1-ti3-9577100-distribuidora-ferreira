import { Component, ViewChild } from '@angular/core';
import { ProdutoElement, ProdutoElementRequest } from '../produtos.component';
import { ProdutoService } from 'src/app/service/produtos/produtos.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table-produto',
  templateUrl: './table-produto.component.html',
  styleUrls: ['./table-produto.component.scss']
})
export class TableProdutoComponent {
  displayedColumns: string[] = ['id', 'nome', 'preco', 'categoria_produto'];
  columnAction: string = 'Actions';
  produtos: ProdutoElement[] = [];
  produtosRequest: ProdutoElementRequest[] = [];
  dataSource!: MatTableDataSource<ProdutoElementRequest>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private produtoService: ProdutoService) {}

  updateTable() {
    this.produtos = [];
    this.produtoService.getProdutos().subscribe(
      data => {
        this.produtos = data;
        this.produtosRequest = data.map(produto => {
          return {
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            subTotal: produto.subTotal,
            img: produto.img,
            categoria_Produto: produto.categoria.nome.toUpperCase()
          };
        });
        this.dataSource = new MatTableDataSource<ProdutoElementRequest>(this.produtosRequest);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => console.error('Erro ao obter vendas:', error)
    );
  }

  ngOnInit(): void {
    this.updateTable();
  }
}
