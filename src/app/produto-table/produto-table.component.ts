import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/model/produto';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-produto-table',
  templateUrl: './produto-table.component.html',
  styleUrls: ['./produto-table.component.css']
})
export class ProdutoTableComponent implements OnInit {
  produtos:Produto[] = [];

  constructor(private service:ProdutosService) {

   }

   ngOnInit():void {
     this.listar();
  }

  listar(){
    this.service.findProduto().subscribe(dados =>{
      this.produtos = dados
    });
  }
}
