import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { categoria_produto, ProdutoElement } from "src/app/modules/produtos/produtos.component";
import { Observable, map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }



  obterCategorias(): Observable<any> {
    return this.http.get('http://localhost:8080/categorias', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  verificarCategoriaExistente(nome: string) {
    return this.http.get('http://localhost:8080/categorias/nome/' + nome, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  cadastrarCategoria(categoria: ProdutoElement) {
    return this.http.post('http://localhost:8080/categorias', categoria, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteCategoria(id: number) {
    return this.http.delete('http://localhost:8080/categorias/' + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
