// notification.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProdutoElement } from 'src/app/modules/produtos/produtos.component';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {

  private produtoDeletadoSource = new Subject<number>();
  private produtoCriadoSource = new Subject<ProdutoElement>();

  private categoriaDeletadaSource = new Subject<number>();
  private categoriaCriadaSource = new Subject<ProdutoElement>();

  private baixoEstoqueDefinidoSource = new Subject<number>();

  produtoCriado$ = this.produtoCriadoSource.asObservable();
  produtoDeletado$ = this.produtoDeletadoSource.asObservable();

  categoriaCriada$ = this.categoriaCriadaSource.asObservable();
  categoriaDeletada$ = this.categoriaDeletadaSource.asObservable();

  baixoEstoqueDefinido$ = this.baixoEstoqueDefinidoSource.asObservable();

  constructor() { }

  notificarProdutoDeletado(produtoId: number) {
    this.produtoDeletadoSource.next(produtoId);
  }

  notificarProdutoCriado(produto: ProdutoElement) {
    this.produtoCriadoSource.next(produto);
  }

  notificarCategoriaDeletada(categoriaId: number) {
    this.categoriaDeletadaSource.next(categoriaId);
  }

  notificarCategoriaCriada(categoria: ProdutoElement) {
    this.categoriaCriadaSource.next(categoria);
  }

  notificarBaixoEstoqueDefinido(produtoId: number) {
    this.baixoEstoqueDefinidoSource.next(produtoId);
  }
}
