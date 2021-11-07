import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CatergoriaService {

  url = "http://localhost:1221/categorias";
  
  
  constructor(private http:HttpClient) { }


  findCategoria():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.url);
  }

  createCategoria(categoria:Categoria):Observable<Categoria>{
    return this.http.post<Categoria>(this.url,categoria);
  }

  deleteById(codigo: number): Observable<Categoria> {
    const url2 = `${this.url}/${codigo}`
      return this.http.delete<Categoria>(url2);
  }

  update(categoria:Categoria):Observable<Categoria>{
    const url2 = `${this.url}/${categoria.codigo}`
    return this.http.put<Categoria>(url2, categoria);
  }

  retrieveById(codigo: string): Observable<Categoria> { 
    const url2 = `${this.url}/${codigo}`
    return this.http.get<Categoria>(url2);
}
}
