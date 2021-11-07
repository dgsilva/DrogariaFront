import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/model/categoria';
import { Produto } from 'src/model/produto';
import { CatergoriaService } from '../services/catergoria-service.service';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {

  produto:Produto;
  categorias : Array<Categoria>;

  constructor(private service:ProdutosService, private router:Router, private route:ActivatedRoute, private servicecategoria:CatergoriaService) {
    this.produto = new Produto();
   }


  ngOnInit():void {
    this.buscarCategoria();
    this.getAll();
  }

  getAll():void {
    const codigo = this.route.snapshot.paramMap.get('codigo') || ''
    this.service.retrieveById(codigo).subscribe(object => {
      this.produto = object;
    });
  }

  buscarCategoria():void{
    this.servicecategoria.findCategoria().subscribe(data => {
      this.categorias = data;
    });
  }

  editar():void{
    this.service.update(this.produto).subscribe(object =>{
      this.produto.categoria = object
      this.router.navigate(['/product-table'])
      console.log('Alterado com sucesso')
    })
  }

}
