import { Component } from '@angular/core';

export interface categoria_produto {
  id: number,
  nome: string
}

export interface ProdutoElement {
  id: number,
  codBarras: string,
  nome: string,
  quantidade?: number,
  quantidadeEstoque: number,
  quantidadeBaixoEstoque: number | null,
  img: string,
  preco: number,
  subTotal: number,
  categoria: categoria_produto
}

export interface ProdutoElementRequest {
  id: number,
  nome: string,
  quantidade?: number,
  preco: number,
  img: string,
  categoria: string
}

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})



export class ProdutosComponent {

}
