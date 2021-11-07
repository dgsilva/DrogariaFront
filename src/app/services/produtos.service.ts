import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  url = "http://localhost:1221/product";

  constructor(private http: HttpClient) { }

  findProduto() {
    return this.http.get<Produto[]>(this.url);
  }
  createProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.url, produto);
  }

  retrieveById(codigo: string): Observable<Produto> {
    const url2 = `${this.url}/${codigo}`
    return this.http.get<Produto>(url2);
  }

  update(produto: Produto): Observable<Produto> {
    const url2 = `${this.url}/${produto.codigo}`
    return this.http.put<Produto>(url2, produto);
  }
  deleteById(codigo: number): Observable<Produto> {
    const url2 = `${this.url}/${codigo}`
      return this.http.delete<Produto>(url2);
  }

}
