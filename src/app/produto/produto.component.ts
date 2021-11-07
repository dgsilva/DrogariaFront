import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/model/categoria';
import { Produto } from 'src/model/produto';
import { CatergoriaService } from '../services/catergoria-service.service';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  
  produto : Produto;
  categorias : Array<Categoria>;

  constructor(private serviceProduto:ProdutosService, private servicecategoria : CatergoriaService, private router:Router) {
    this.produto = new Produto();
    
   }

  ngOnInit(): void {
    this.listar();
  }


  save():void{
    this.serviceProduto.createProduto(this.produto).subscribe(res=>{
      this.produto = res;
      this.router.navigate(['product-table']);
      console.log("Cadastrado com sucesso");
    });
  }

  public listar(){
    this.servicecategoria.findCategoria().subscribe(data => {
      this.categorias = data;
      console.log(this.categorias);
    });
  }
}
