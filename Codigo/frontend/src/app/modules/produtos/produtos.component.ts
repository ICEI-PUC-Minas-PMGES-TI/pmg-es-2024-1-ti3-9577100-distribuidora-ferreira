import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { DialogNovoProdutoComponent } from './dialog-novo-produto/dialog-novo-produto.component';
import { MatDialog } from '@angular/material/dialog';
import { ProdutoService } from 'src/app/service/produtos/produtos.service';
import { DialogNovaCategoriaComponent } from './dialog-nova-categoria/dialog-nova-categoria.component';

export interface ProdutoFileIdResponse {
  file: string;
}

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
  styleUrls: ['./produtos.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ]
})



export class ProdutosComponent {
  constructor(private dialog: MatDialog, private produtoService: ProdutoService) { }


  abrirDialogNovoProduto() {
    this.dialog.open(DialogNovoProdutoComponent, {
      width: 'max-content',
      height: 'max-content',
      panelClass: '',
      enterAnimationDuration: '350ms',
      exitAnimationDuration: '350ms'
    });
  }

  abrirDialogNovaCategoria() {
    this.dialog.open(DialogNovaCategoriaComponent, {
      width: 'max-content',
      height: 'max-content',
      panelClass: '',
      enterAnimationDuration: '350ms',
      exitAnimationDuration: '350ms'
    });
  }

  abrirDialogDeleteProduto(produto: ProdutoElement) {
    this.dialog.open(DialogNovoProdutoComponent, {
      data: produto,
      width: 'max-content',
      height: 'max-content',
      panelClass: '',
      enterAnimationDuration: '350ms',
      exitAnimationDuration: '350ms'
    });
  }

  toolbarTitle = 'Produtos e Categorias';
  actions = [
    {
      icon: 'flip_to_front',
      label: 'Novo',
      menu: 'novoProduto',
      menuItems: [
        {
          icon: 'fastfood',
          label: 'Novo Produto',
          action: () => this.abrirDialogNovoProduto(),
        },
        {
          icon: 'bookmark',
          label: 'Nova Categoria',
          action: () => this.abrirDialogNovaCategoria(),
        }
      ],
    }
  ];
}
